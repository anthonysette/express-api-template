const controllers = require("../../controllers");
const authCheck = require("../../middleware/auth");

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