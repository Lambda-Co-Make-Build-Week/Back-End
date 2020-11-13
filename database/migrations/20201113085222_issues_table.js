
exports.up = function (knex) {
    return knex.schema
        .createTable('users', users => {
            users.increments()
            users.string('username', 255).notNullable().unique()
            users.string('password', 255).notNullable()
            users.string('email', 200).notNullable()
        })
        .createTable('issues', tbl => {
            tbl.increments();
            tbl.string('issue_name', 255).notNullable().unique()
            tbl.string('issue_description', 1000).notNullable()
            tbl.string('issue_img', 1000).notNullable()
            tbl.integer('upvotes').defaultTo(0)
        })
        .createTable('comments', tbl => {
            tbl.increments()
            tbl.string('comment').notNullable()
            tbl.integer('issue_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('issues')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
}

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('comments')
        .dropTableIfExists('issues')
        .dropTableIfExists('users');
}