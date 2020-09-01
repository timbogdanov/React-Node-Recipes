const db = require('../../db/db-config');

module.exports = {
  create,
  findBy,
  findById,
};

function create(recipe) {
  return db('recipes')
    .insert(recipe, 'id')
    .then((ids) => findById(ids[0]));
}

function findBy(filter) {
  return db('recipes').where('user_id', '=', filter);
}

function findById(id) {
  return db('recipes').where('user_id', '=', id).first();
}
