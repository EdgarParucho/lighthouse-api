module.exports = {
  dbURL: process.env.DB_URL,
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER,
  tokenSigningAlg: process.env.TOKEN_ALG,
  managementGrantType: process.env.MANAGEMENT_GRANT_TYPE,
  managementClientID: process.env.MANAGEMENT_CLIENT_ID,
  managementClientSecret: process.env.MANAGEMENT_CLIENT_SECRET,
};
