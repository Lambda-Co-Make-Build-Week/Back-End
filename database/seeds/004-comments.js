exports.seed = function (knex) {
  return knex('comments').insert([
    { comment: 'Jeeze this is really awful', issue_id: 1 },
    { comment: 'is the person okay?', issue_id: 2 },
    { comment: 'he should really study harder', issue_id: 3 },
    { comment: 'nah hes a genius hes got it ', issue_id: 3 },
    { comment: 'arrest this man noa!', issue_id: 1 },
    { comment: 'what did the car look like?', issue_id: 2 }
  ]);
};