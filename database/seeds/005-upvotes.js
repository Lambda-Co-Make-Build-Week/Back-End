exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("upvotes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("upvotes").insert([
        { user_id: 3, issue_id: 1 },
        { user_id: 2, issue_id: 1 },
        { user_id: 1, issue_id: 2 },
      ]);
    });
};