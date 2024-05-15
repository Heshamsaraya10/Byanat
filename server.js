"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app_setup_1 = __importDefault(require("./src/utils/app-setup"));
// import { AppDataSource } from "./src/data-source";
// import { AppDataSource } from "./databaseConfig/connection";
// import mountRoutes from "./hooks/index.hooks";
const app = (0, express_1.default)();
(0, app_setup_1.default)(app);
//conncet with db
// AppDataSource();
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((error: any) => {
//     console.log("error connecting to database", error);
//   });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server Started on PORT { ${port} }`);
});
//Handele rejection outside express
process.on("unhandledRejection", (err) => {
    console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error(`Shutting down...`);
        process.exit(1);
    });
});
exports.default = app;
