const filterByKeys = (obj, keysByFilter) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keysByFilter.includes(key))
  );
};

module.exports = filterByKeys;