const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const {
    createComment,
    getComments,
    deleteComment
} = require('../controllers/comment.controller');

router.get('/post/:postId', getComments);

router.post('/', auth, createComment);

router.delete('/:id', auth, deleteComment);

module.exports = router;