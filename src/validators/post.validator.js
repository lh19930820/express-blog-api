const { z } = require('zod');

exports.createPostSchema = z.object({
    title: z.string().min(3, 'Title tối thiểu 3 ký tự'),
    content: z.string().min(10, 'Content tối thiểu 10 ký tự')
});

exports.updatePostSchema = z.object({
    title: z.string().min(3).optional(),
    content: z.string().min(10).optional()
});

exports.idParamSchema = z.object({
    id: z.string().min(1, 'ID không hợp lệ')
});
