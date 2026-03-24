const postService = require('../services/post.service');

exports.createPost = async (req, res, next) => {
    try {
        const post = await postService.createPost(req.body, req.user.userId);
        res.json(post);
    } catch (err) {
        next(err);
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await postService.getPosts();
        res.json(posts);
    } catch (err) {
        next(err);
    }
};
// TODO: Update & delete post APIs
// TODO: Filter post

