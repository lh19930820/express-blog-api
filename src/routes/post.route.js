const router = require('express').Router();

const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/post.middleware');

const { createPost, getPosts, updatePost, deletePost } = require('../controllers/post.controller');

const { createPostSchema, updatePostSchema } = require('../validators/post.validator');

router.get('/', getPosts);

router.post('/', auth, validate(createPostSchema), createPost);

router.put('/:id', auth, validate(updatePostSchema), updatePost);

router.delete('/:id', auth, deletePost);

module.exports = router;
