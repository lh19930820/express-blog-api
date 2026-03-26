module.exports = (schema) => (req, res, next) => {
    try {
        if (schema.body) {
            req.body = schema.body.parse(req.body);
        }

        if (schema.query) {
            req.query = schema.query.parse(req.query);
        }

        if (schema.params) {
            req.params = schema.params.parse(req.params);
        }

        next();
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.issues?.[0]?.message || 'Validation error'
        });
    }
};
