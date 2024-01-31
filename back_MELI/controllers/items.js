const { response } = require("express");
const { fetchApi, fetchAll } = require("../api/fetchApi");
const { buildSearchRes, buildItemDetail } = require("../utils/buildData");
const { findValue } = require("../utils/findValue");
const { NOT_FOUND_MESSAGE } = require("../utils/constants");

const mergePromises = (urls) => urls.map((url) => fetchApi.get(url));

const searchItems = async (req, res = response) => {
  const { q } = req.query;

  try {
    const {
      data: { results, filters },
    } = await fetchApi.get(`sites/MLA/search?q=${q}&limit=4`);

    if (!results.length) {
      return res.status(404).json({
        message: NOT_FOUND_MESSAGE,
        error: "not_found",
      });
    }

    const categories = findValue(filters, "category");

    if (categories) {
      const { path_from_root } = categories.values[0];
      return res.json(buildSearchRes(results, path_from_root));
    }

    const { category_id } = results[0];
    const { data } = await fetchApi.get(`categories/${category_id}`);

    return res.json(buildSearchRes(results, data.path_from_root));
  } catch (error) {
    console.error(`Error al realizar la busqueda`, error);
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

const searchItemsById = async (req, res) => {
  const { id } = req.params;
  const urls = [`items/${id}`, `items/${id}/description`];

  try {

    const promises = mergePromises(urls);
    const [itemDetail, description] = await fetchAll(promises);
    const { category_id } = itemDetail;
    const { data } = await fetchApi.get(`categories/${category_id}`);
    res.json(buildItemDetail(itemDetail, description, data.path_from_root));
  } catch (error) {

    console.error(error);
    if (error.response.status === 404) {
      res.status(404).json({
        message: `Error al obtener el item ${id}`,
        error: "not_found",
      });
    } else {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
};

module.exports = {
  searchItems,
  searchItemsById,
};
