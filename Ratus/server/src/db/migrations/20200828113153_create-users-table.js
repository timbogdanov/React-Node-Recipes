exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id');

    t.string('first_name', 255).notNullable();
    t.string('last_name', 255).notNullable();
    t.string('username', 255).unique().notNullable();
    t.string('password', 255).notNullable();
    t.string('email', 255).unique().notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
