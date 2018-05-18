
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: "your house", time: "8:00", user_id: 1},
        {location: "a house", time: "16:00", user_id: 2},
        {location: "the house", time: "23:00", user_id: 3}
      ]);
    });
};
