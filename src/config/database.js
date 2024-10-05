const { dbURL } = require('.');

module.exports = {
  url: dbURL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === "production",
  },
};
