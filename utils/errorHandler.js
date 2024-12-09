class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

const handleError = (err, res) => {
    const { message, statusCode = 500 } = err;
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};

module.exports = { AppError, handleError };
