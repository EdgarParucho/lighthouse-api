const express = require('express');
const app = express();
const cors = require('cors');
const { dbErrorHandler } = require('./src/middleware/dbErrorHandler');
const { serverErrorHandler } = require('./src/middleware/serverErrorHandler');
const { responseHandlerOnError } = require('./src/utils/responseHandler');
const devMode = process.env.NODE_ENV == 'development';
if (devMode) require('./src/utils/useDevTools').useDevTools(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./src/routes'));
app.use('/*', (req, res) => responseHandlerOnError(res, { statusCode: 404, data: null }));
app.use(dbErrorHandler);
app.use(serverErrorHandler);

const port = devMode ? 3000 : process.env.PORT;
app.listen(port, () => console.log(`\nServer on: http://localhost:${port}`));

module.exports = app;
