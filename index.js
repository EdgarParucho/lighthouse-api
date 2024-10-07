const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');
const app = express();
const router = require('./src/routes');

if (process.env.NODE_ENV == 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER,
  tokenSigningAlg: process.env.TOKEN_ALG,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(jwtCheck);
app.use('/api', router);

app.listen(process.env.PORT || 3000);

module.exports = app;