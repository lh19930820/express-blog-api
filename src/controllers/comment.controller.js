const commentService = require('../services/comment.service');

exports.createComment = async (req, res) => {
    try {
        const comment = await commentService.createComment(
            req.body,
            req.user.id
        );

        res.json(comment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await commentService.getCommentsByPost(req.params.postId);
        res.json(comments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await commentService.deleteComment(req.params.id, req.user.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};