const authCheck = (req, res, next) => {
    // If user is logged in, continue
    if (true) {
        next();
    } else {
        next({
            status: 401,
            msg: "Unauthorized",
        });
    }
}

module.exports = authCheck;