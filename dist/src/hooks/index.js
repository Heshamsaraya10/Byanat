"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("../Router/user-route"));
const mountRoutes = (app) => {
    app.use("/api/v1/user", user_route_1.default);
};
exports.default = mountRoutes;
