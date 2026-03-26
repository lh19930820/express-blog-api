const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const { createPost, getPosts } = require('../controllers/post.controller');

router.get('/', getPosts);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
