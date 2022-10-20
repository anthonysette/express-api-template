//import models
const userModel = require("./src/models/user.json");

const config = require("./config");

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Express API Template",
        description:
            "This is Anthony Sette's preffered Express.js API Architecture. Try using this template on your next project!",
        version: "1.0.0",
    },
    servers: [
        {
            url: config.baseUrl + "/" + config.apiVersion,
            description: config.nodeEnv,
        },
    ],
    components: {
        schemas: {
            User: userModel,
        },
        responses: {
            400: {
                description: "Invalid request",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    value: {
                                        type: "string",
                                    },
                                    msg: {
                                        type: "string",
                                    },
                                    param: {
                                        type: "string",
                                    },
                                    location: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            401: {
                description: "Unauthorized",
            },
            500: {
                description: "Server error, check logs.",
            },
        },
    },
    paths: {},
    tags: [
        {
            name: "Users",
            description:
                "These endpoints allow you to create and query users.",
        }
    ],
};
