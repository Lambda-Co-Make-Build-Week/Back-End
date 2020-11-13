exports.seed = function (knex) {
  return knex('issues').insert([
    { issue_name: 'Serial flasher', issue_description: 'A random guy flashing people in the parking lots', issue_img: 'https://images.unsplash.com/photo-1540116771367-4b6be7945fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { issue_name: 'hit and run', issue_description: 'Some guy hit someone with their car', issue_img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' },
    { issue_name: 'justin', issue_description: 'has not finished his interview', issue_img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }
  ]);
};
