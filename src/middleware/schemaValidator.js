function schemaValidator({ validationKey, schema }) {
  return (req, res, next) => {
    const respondBadRequest = () => res.sendStatus(400);
    const payload = req[validationKey];

    if (missingMandatoryKey(schema, payload)) return respondBadRequest();

    for (let key of Object.keys(payload)) {
      if (unexpectedKey(schema[key])) return respondBadRequest();
      if (failsValidations(schema[key], payload[key])) return respondBadRequest();
    }

    next();
  };
}

const missingMandatoryKey = (schema, payload) => Object.keys(schema).some(
  (key) => schema[key].isMandatory && payload[key] == undefined
);

const unexpectedKey = (schemaProp) => schemaProp == undefined;

const failsValidations = (schemaProp, payloadValue) => schemaProp.validations.some(
  (validation) => !validation(payloadValue)
);

module.exports = schemaValidator;
