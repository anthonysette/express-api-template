// Package imports
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const { initialize } = require("express-openapi");

// Local imports
const config = require("./config");

// Create Express App
const app = express();

// Enable parse JSON Body
app.use(express.json());

// Cors
app.use("*", cors());

// Open API Docs
const apiDoc = require("./openapi");
initialize({
    app,
    apiDoc: {
        ...apiDoc,
        "x-express-openapi-disable-validation-middleware": true,
    },
    docsPath: "/openapi.json",
    paths: "./src/paths",
});
var options = {
    swaggerOptions: {
        url: "/" + config.apiVersion + "/openapi.json",
    },
};

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(null, options)
);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        status: err.status || 500,
        msg: err.msg || "An internal server error occured, check the logs.",
    });
});

app.listen(config.port, () => {
    console.log(
        `Base Operations API listening, check the docs at ${config.baseUrl}/docs`
    );
});
