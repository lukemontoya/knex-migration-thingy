
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Kyle', email:'troy@galvanize.com', password:"p@ssword123"},
        {name: 'Kevin', email:'atroy@galvanize.com', password:"p@ssword234"},
        {name: 'Kilroy', email:'thetroy@galvanize.com', password:"p@ssword345"}
      ]);
    });
};
