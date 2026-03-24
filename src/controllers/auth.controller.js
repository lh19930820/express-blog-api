const authService = require('../services/auth.service');
const { registerSchema, loginSchema } = require('../validators/auth.validator');

exports.register = async (req, res, next) => {
    try {
        const data = registerSchema.parse(req.body);
        const result = await authService.register(data);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const data = loginSchema.parse(req.body);
        const result = await authService.login(data);
        res.json(result);
    } catch (err) {
        next(err);
    }
};
