const ErrorHandler = require("../utils/errorHandler")

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";

    // Wrong Mongodb Id error
    if (err.name === "CastError") {
        const message = `resource not found . invalid ${err.path}`
        err = new ErrorHandler(message, 400);
    }
    //Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `duplicate ${Object.keys(err.keyValue)} Entered `;
        err = new ErrorHandler(message, 400);

    }

    // wrong JWT error
    if (err.name === "jsonWebTokenError") {
        const message = `jsonwebtoken is invalid , try again `;
        err = new ErrorHandler(message, 400);
    }

    if (err.name === "TokenExpiredError") {
        const message = `jsonwebtoken is Expired , try again `;
        err = new ErrorHandler(message, 400);
    }






    res.status(err.statusCode).json(
        {
            sucess: false,
            error: err.stack,
            message: err.message
        });




}
