const Comment = require('../models/Comment.js');

exports.createComment = async (data, userId) => {
    const comment = await Comment.create({
        content: data.content,
        userId,
        postId: data.postId
    });

    return comment;
};

exports.getCommentsByPost = async (postId) => {
    return await Comment.find({ postId })
        .populate('userId', 'email')
        .sort({ createdAt: -1 });
};

exports.deleteComment = async (commentId, userId) => {
    const comment = await Comment.findById(commentId);

    if (!comment) throw new Error('Comment not found');

    if (comment.userId.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    await comment.deleteOne();
};