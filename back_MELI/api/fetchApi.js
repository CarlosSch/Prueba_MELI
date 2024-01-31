const axios = require("axios");

const fetchApi = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

fetchApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchAll = async (promises) => {
  try {
    const responses = await Promise.all(promises);
    return responses.map(({ data }) => data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

module.exports = {
  fetchApi,
  fetchAll,
};
