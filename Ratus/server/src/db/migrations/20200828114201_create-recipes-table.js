exports.up = function (knex) {
  return knex.schema.createTable('recipes', (t) => {
    t.increments('id');

    t.string('name', 255).notNullable();
    t.string('source', 255).nullable();
    t.string('cook_time', 255).notNullable();
    t.string('level_of_difficulty', 255).notNullable();
    t.string('serving_size', 255).notNullable();

    t.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipes');
};
