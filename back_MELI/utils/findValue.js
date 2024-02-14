const findValue = (arr, value) => arr.find((obj) => Object.values(obj).includes(value));

module.exports = {
  findValue,
};
