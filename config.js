const dotenv = require("dotenv");

dotenv.config();

// I would recommend replacing these constants with environment variables.
// This should be the only place you reference ENV variables (process.env.XXX).
// Everywhere else should use the config object.
module.exports = {
    baseUrl: "http://localhost:8080",
    apiVersion: "v1",
    port: 8080,
    nodeEnv: "development",
};
