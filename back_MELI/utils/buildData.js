const { AUTHOR, CONDITIONS } = require("./constants");

const buildPrice = (price, currency) => {
  const [amount, decimals] = price.toFixed(2).split(".");

  return {
    currency,
    amount: +(amount),
    decimals: +(decimals),
  };
};

const buildItem = ({id, title, price, currency_id, thumbnail, condition, shipping}) => {
  return {
    id,
    title,
    price: buildPrice(price, currency_id),
    picture: thumbnail,
    condition: CONDITIONS[condition],
    free_shipping: shipping.free_shipping
  }
}

const buildSearchRes = (results, categories) => {
  
  return {
    author: AUTHOR,
    categories: categories.map(({name}) => name),
    items: results.map( item =>  buildItem(item)),
  }
}

const buildItemDetail = (itemDetail, description, categories) => {
  const item = buildItem(itemDetail);
  item.description = description.plain_text;
  item.sold_quantity = itemDetail.sold_quantity;

  return {
    author: AUTHOR,
    categories: categories.map( ({name}) => name ),
    item
  }
}

module.exports = {
  buildSearchRes,
  buildItemDetail,
};