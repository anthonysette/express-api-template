# Validation

Typically I have one validation file for every controller file. This means each
validation file groups validators by category.

These validation files are rather simple. This template uses
[Express Validator](https://express-validator.github.io/docs/), feel free to
review their documentation.

For every endpoint that has query parameters, or a request body I will validate
the user request. This assures the API is interacting with exactly the data
types it is expecting.

Here is an example validator from this template:

```
const createUser = [
    body(["firstName", "lastName"]).isLength({ min: 1 }).withMessage("This field must be a string with a length greater than 0."),
    body("email").isEmail().withMessage("This field must be a valid email"),
    ...isLatLongRequired
]
```

When this validation is executed it will check that the first and last name is
longer than 1 character and that the email is a valid email. If either of these
fail the API will respond with a 400 error and include the message chained
above.
