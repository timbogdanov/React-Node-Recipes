const db = require('../../db/db-config');

module.exports = {
  create,
  findBy,
  findById,
};

function create(user) {
  return db('users')
    .insert(user, 'id')
    .then((ids) => findById(ids[0]));
}

function findBy(filter) {
  return db('users').where(filter).orderBy('id');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .select('first_name', 'last_name', 'email');
}
