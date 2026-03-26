const { z } = require('zod');

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId');

exports.createCommentSchema = z.object({
    content: z
        .string()
        .trim()
        .min(1, 'Content is required')
        .max(500, 'Comment too long'),

    postId: objectId
});

exports.getCommentsSchema = z.object({
    postId: objectId
});

exports.deleteCommentSchema = z.object({
    id: objectId
});