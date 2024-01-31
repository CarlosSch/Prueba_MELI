const findValue = (arr, value) => {
  return arr.find((obj) => Object.values(obj).includes(value));
};

module.exports = {
  findValue,
};
