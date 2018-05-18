
exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointment", (table)=>{
    table.increments();
    table.string("location");
    table.time("time");
    table.integer("user_id")
      .notNullable()
      .references('id')
      .inTable('user')
      // .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appointment");
};
