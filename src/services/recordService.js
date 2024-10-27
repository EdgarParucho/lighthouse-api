const sequelize = require('../dataAccess/sequelize');
const { Op } = require('sequelize');
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

const DeleteRecord = ({ userID, recordID: id }) => new Promise((resolve, reject) => {
  Record.destroy({ where: { userID, id } })
    .then(() => resolve())
    .catch((error) => reject(error))
});

const GetRecords = ({ userID, from, to }) => new Promise((resolve, reject) => {
  Record.findAll({
    where: {
      userID,
      date: {
        [Op.and]: [{ [Op.gte]: from }, { [Op.lt]: to }]
      }
    },
    raw: true,
    attributes: { exclude: 'userID' }
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error))
})

module.exports = {
  CreateRecord,
  UpdateRecord,
  DeleteRecord,
  GetRecords,
};
