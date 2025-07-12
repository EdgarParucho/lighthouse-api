const sequelize = require('../dataAccess/sequelize');
const { User } = sequelize.models;

const {
  issuerBaseURL,
  authGrantType: grant_type,
  authClientID: client_id,
  authClientSecret: client_secret,
} = require('../config/auth');

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

const UpdateAccount = ({ userID: id, values }) => new Promise(async (resolve, reject) => {
  const accessToken = await getManagementAccesToken();
  fetch(`${issuerBaseURL}api/v2/users/${id}`, {
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

const DeleteAccount = ({ userID: id }) => new Promise(async (resolve, reject) => {
  const accessToken = await getManagementAccesToken();
  fetch(`${issuerBaseURL}api/v2/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then(async () => {
      await User.destroy({ where: { id } })
      resolve();
    })
    .catch((error) => reject(error))
})

module.exports = {
  UpdateAccount,
  DeleteAccount,
};