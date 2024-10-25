const isValidDate = (value) => {
  const date = new Date(value);
  return !isNaN(date.getTime());
};

const firstOfMonth = (month = new Date().getMonth()) => {
  const year = new Date().getFullYear()
  return new Date(year, month, 1)
}

module.exports = { isValidDate, firstOfMonth };
