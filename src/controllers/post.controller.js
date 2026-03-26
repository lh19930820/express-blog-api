const postService = require('../services/post.service');

exports.createPost = async (req, res, next) => {
    try {
        const post = await postService.createPost(
            req.body,
            req.user.userId
        );

        res.status(201).json({
            success: true,
            data: post
        });
    } catch (err) {
        next(err);
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, search, userId } = req.query;

        const result = await postService.getPosts({
            page: Number(page),
            limit: Number(limit),
            search,
            userId
        });

        res.json({
            success: true,
            ...result
        });
    } catch (err) {
        next(err);
    }
};

exports.getPostDetail = async (req, res, next) => {
    try {
        const post = await postService.getPostById(req.params.id);

        res.json({
            success: true,
            data: post
        });
    } catch (err) {
        next(err);
    }
};

exports.updatePost = async (req, res, next) => {
    try {
        const post = await postService.updatePost(
            req.params.id,
            req.body,
            req.user.userId
        );

        res.json({
            success: true,
            data: post
        });
    } catch (err) {
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        await postService.deletePost(
            req.params.id,
            req.user.userId
        );

        res.json({
            success: true,
            message: 'Post deleted successfully'
        });
    } catch (err) {
        next(err);
    }
};