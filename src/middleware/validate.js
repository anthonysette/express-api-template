const { validationResult, matchedData } = require("express-validator");

const validate = (schemas) => {
    return async (req, res, next) => {
        await Promise.all(schemas.map((schema) => schema.run(req)));

        req.body = matchedData(req, {
            includeOptionals: false,
            locations: ["body"],
        });

        req.query = matchedData(req, {
            includeOptionals: false,
            locations: ["query"],
        });

        const result = validationResult(req);
        if (result.isEmpty()) {
            return next();
        }

        const errors = result.array();
        return res.status(400).send(errors);
    };
};

module.exports = validate;
