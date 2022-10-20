# Middleware

### What is middleware?

Methods to be executed before controller is called.

### Directory Structure?

Typically I create a new file for each piece of middleware.

### What does middleware do?

Middleware operates between the endpoint call and the endpoint execution. This
layer is commonly used for authentication, API Key Auth, Request Validation, and
more!

In this template you will see one middleware file for validation that I will use
in many endpoints.
