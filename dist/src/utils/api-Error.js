"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@desc   this class is responsible about operational errors {error that i can predict}
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "failed" : "error";
        this.isOperational = true;
    }
}
exports.default = ApiError;
