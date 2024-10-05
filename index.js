const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes');

if (process.env.NODE_ENV == 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(process.env.PORT || 3000, () => console.log('API running'));

module.exports = app;