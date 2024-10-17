const {
  issuerBaseURL,
  managementGrantType: grant_type,
  managementClientID: client_id,
  managementClientSecret: client_secret,
} = require('../config');

function getManagementAccesToken() {
  return fetch(`${issuerBaseURL}oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      audience: `${issuerBaseURL}api/v2/`,
      grant_type,
      client_id,
      client_secret,
    }),
  })
    .then((response) => response.json())
    .then(({ access_token }) => access_token)
    .catch((error) => {
      throw error
    })
    
}

const UpdateAccount = ({ userID, values }) => new Promise(async (resolve, reject) => {
  const accessToken = await getManagementAccesToken();
  fetch(`${issuerBaseURL}api/v2/users/${userID}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(() => resolve())
    .catch((error) => reject(error))
})

module.exports = {
  UpdateAccount,
};