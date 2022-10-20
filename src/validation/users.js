const { body } = require("express-validator");

// Validate create user endpoint
const createUser = [
    body(["firstName", "lastName"]).isLength({ min: 1 }).withMessage("This field must be a string with a length greater than 0."),
    body("email").isEmail().withMessage("This field must be a valid email"),
]

module.exports = {
    createUser
};
