function useDevTools(app) {
  require('dotenv').config();
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

module.exports = { useDevTools };
