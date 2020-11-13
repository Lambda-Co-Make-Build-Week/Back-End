const express = require('express');

const Issue = require('./issue-model');

const router = express.Router();


router.get('/', (req, res) => {
    Issue.getIssues()
        .then(issues => {
            res.status(200).json(issues);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Issues list' });
        });
});

router.get('/:id', validateId, (req, res) => {
    Issue.getIssueById(req.params.id)
        .then(issue => {
            res.status(200).json(issue);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Issue ' });
        });
});

router.post('/', validateIssueField, (req, res) => {
    Issue.addIssue(req.body)
        .then(issue => {
            res.status(200).json(issue);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post new  Issue ' });
        });
});

router.put('/:id', [validateId, validateIssueField], (req, res) => {
    Issue.update(req.body, req.params.id)
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json(err.message)
        })
})

router.delete('/:id', validateId, (req, res) => {
    const { id } = req.params;

    Issue.remove(id)
        .then(() => {
            res.status(200).json({ message: `successfully deleted post id of ${id}` })
        }).catch((err) => {
            res.status(500).json(err.message)
        });
})

router.get('/:id/comments', validateId, (req, res) => {
    Issue.getComments(req.params.id)
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get comment List' });
        });
});

router.post('/:id/comments', validateCommentField, (req, res) => {
    const newComment = { issue_id: req.params.id, ...req.body }
    Issue.addComment(newComment)
        .then(comment => {
            res.status(200).json(comment);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to make new comment ' });
        });
});


function validateId(req, res, next) {
    const { id } = req.params
    Issue.getIssueById(id)
        .then((data) => {
            if (data) {
                req.issue = data
                next()
            } else {
                res.status(400).json({ message: `no Issues found with id ${id}` })
            }
        }).catch((err) => {
            res.status(500).json(err.message)
        })
}

function validateIssueField(req, res, next) {
    if (!req.body) {
        res.status(400).json('please fill out all required fields')
    } else if (!req.body.issue_name || !req.body.issue_description) {
        res.status(400).json('please fill out all required fields')
    } else {
        next()
    }
}

function validateCommentField(req, res, next) {
    if (!req.body) {
        res.status(400).json('please fill out all required fields')
    } else if (!req.body.comment) {
        res.status(400).json('please fill out all required fields')
    } else {
        next()
    }
}


module.exports = router;