
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'Mikehill', password: 'password', email: 'mike@mike.com' },
    { username: 'Brandon', password: 'password', email: 'Brandon@Brandon.com' },
    { username: 'Will', password: '12345', email: 'will@will.com' }
  ]);
};