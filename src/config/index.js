if (process.env.NODE_ENV == 'development') require('dotenv').config();

module.exports = {
  dbURL: process.env.DB_URL,
};
