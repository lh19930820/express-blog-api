const Post = require('../models/Post');

exports.createPost = async (data, userId) => {
    const post = await Post.create({
        ...data,
        userId
    });

    return post;
};

exports.getPosts = async () => {
    return await Post.find().populate('userId', 'email');
};
