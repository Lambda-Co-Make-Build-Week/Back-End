const db = require("../database/db-config");


module.exports = {
    getIssues() {
        return db('issues')
            .select('*')
    },
    getIssueById(id) {
        return db('issues').where({ id }).first()
    },
    addIssue(issue) {
        return db('issues')
            .insert(issue, 'id')
            .then(() => this.getIssues())
    },
    update(changes, id) {
        return db('issues')
            .where({ id })
            .update(changes)
            .then((count) => (count > 0 ? this.getIssueById(id) : null))
    },
    remove(id) {
        return db('issues')
            .where({ id })
            .del()
    },
    getComments(id) {
        return db('issues')
            .join('comments', 'issues.id', 'comments.issue_id')
            .select('comments.id', 'comments.comment')
            .where({ 'issue_id': id })
    },
    addComment(newComment) {
        return db('comments')
            .insert(newComment, 'id')
            .then(() => this.getComments(newComment.issue_id))
    }
}