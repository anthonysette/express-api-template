const controllers = require("../../controllers");
const validate = require("../../middleware/validate");
const { createOrUpdateUser } = require("../../validation/users");

module.exports = {
    // Get user by ID handler
    get: [
        //Authenticate
        authCheck,
        // Nothing to validate here since we are just getting a user by ID
        // Controller
        controllers.users.getUser,
    ],


    parameters: [
        {
            in: "path",
            name: "id",
            schema: {
                type: "string",
            },
            required: true,
            description: "User ID",
        },
    ]
};

module.exports.get.apiDoc = {
    summary: "Get User by ID",
    tags: ["Users"],
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

module.exports.put.apiDoc = {
    summary: "Update User",
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
                        },
                        latitude: {
                            type: "number",
                        },
                        longitude: {
                            type: "number",
                        },
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
        500: {
            $ref: "#/components/responses/500",
        },
    },
};

module.exports.delete.apiDoc = {
    summary: "Delete User",
    tags: ["Users"],
    responses: {
        200: {
            description: "User Deleted",
        },
        400: {
            $ref: "#/components/responses/400",
        },
        500: {
            $ref: "#/components/responses/500",
        },
    },
};



