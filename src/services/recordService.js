const sequelize = require('../dataAccess/sequelize');
const { Record } = sequelize.models;

const CreateRecord = (values) => {
  if (values.note == '') values.note = null;
  return new Promise((resolve, reject) => Record.create(values)
    .then(({ id, note, date, habitID }) => resolve({ id, note, date, habitID }))
    .catch((error) => reject(error))
  )
};

const UpdateRecord = ({ userID, recordID: id, values }) => {
  if (values.note == '') values.note = null;
  return new Promise((resolve, reject) => {
    Record.update(values, { where: { userID, id } })
      .then(() => resolve())
      .catch((error) => reject(error))
  });
};

module.exports = {
  CreateRecord,
  UpdateRecord,
};
