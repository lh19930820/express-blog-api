const Post = require('../models/Post');

exports.createPost = async (data, userId) => {
    const post = await Post.create({
        title: data.title,
        content: data.content,
        userId
    });

    return post;
};

exports.getPosts = async ({ page = 1, limit = 10, search, userId }) => {
    const query = {};

    if (search) {
        query.title = { $regex: search, $options: 'i' };
    }

    if (userId) {
        query.userId = userId;
    }

    const posts = await Post.find(query)
        .populate('userId', 'email')
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });

    const total = await Post.countDocuments(query);

    return {
        data: posts,
        pagination: {
            total,
            page,
            limit
        }
    };
};

exports.getPostById = async (postId) => {
    const post = await Post.findById(postId).populate('userId', 'email');

    if (!post) {
        throw new Error('Post not found');
    }

    return post;
};

exports.updatePost = async (postId, data, userId) => {
    const post = await Post.findById(postId);

    if (!post) throw new Error('Post not found');

    if (post.userId.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    if (data.title !== undefined) post.title = data.title;
    if (data.content !== undefined) post.content = data.content;

    await post.save();

    return post;
};

exports.deletePost = async (postId, userId) => {
    const post = await Post.findById(postId);

    if (!post) throw new Error('Post not found');

    if (post.userId.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    await post.deleteOne();
};
