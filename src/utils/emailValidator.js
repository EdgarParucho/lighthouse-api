const matchesEmailFormat = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

module.exports = { matchesEmailFormat };