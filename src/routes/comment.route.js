const router = require('express').Router();
const auth = require('../middleware/auth.middleware');

const { validate, validateParams } = require('../middleware/comment.middleware');

const {
    createCommentSchema,
    getCommentsSchema,
    deleteCommentSchema
} = require('../validators/comment.validator');

const {
    createComment,
    getComments,
    deleteComment
} = require('../controllers/comment.controller');

router.get(
    '/post/:postId',
    validateParams(getCommentsSchema),
    getComments
);

router.post(
    '/',
    auth,
    validate(createCommentSchema),
    createComment
);

router.delete(
    '/:id',
    auth,
    validateParams(deleteCommentSchema),
    deleteComment
);

module.exports = router;