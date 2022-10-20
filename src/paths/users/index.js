const controllers = require("../../controllers");
const validate = require("../../middleware/validate");
const authCheck = require("../../middleware/auth");
const { createUser } = require("../../validation/users");

// Endpoint Handlers
module.exports = {
    // Get users route
    get: [
        //Authenticate
        authCheck,
        // Nothing to validate here since we are just getting all users
        // Controller
        controllers.users.getUsers,
    ],

    // Create user handler
    post: [
        //Authenticate
        authCheck,
        // Validate
        validate(createUser),
        // Controller
        controllers.users.createUser,
    ],
};

// Endpoint Documentation
module.exports.get.apiDoc = {
    summary: "Get Users.",
    tags: ["Users"],
    responses: {
        200: {
            description: "Success",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
        },
        400: {
            $ref: "#/components/responses/400",
        },
        401: {
            $ref: "#/components/responses/400",
        },
        500: {
            $ref: "#/components/responses/500",
        },
    },
};

module.exports.post.apiDoc = {
    summary: "Create User",
    tags: ["Users"],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        firstName: {
                            type: "string",
                        },
                        lastName: {
                            type: "string",
                        },
                        email: {
                            type: "string",
                        }
                    },
                },
            },
        },
    },
    responses: {
        200: {
            description: "Success",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User",
                    },
                },
            },
        },
        400: {
            $ref: "#/components/responses/400",
        },
        401: {
            $ref: "#/components/responses/400",
        },
        500: {
            $ref: "#/components/responses/500",
        },
    },
};