exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'BooBear', password: 'Simba', department: "Safari" },
        { username: 'BooBoo', password: 'Bambi', department: "NameTag" },

      ]);
    });
};