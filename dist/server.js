"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app_setup_1 = __importDefault(require("./src/utils/app-setup"));
const index_1 = __importDefault(require("./src/hooks/index"));
// import Connection from "./src/databaseConfig/database";
const app = (0, express_1.default)();
(0, app_setup_1.default)(app);
(0, index_1.default)(app);
"./dist/src/";
//conncet with db
// Connection();
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
    console.log(`mode: ${process.env.NODE_ENV}`);
}
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server Started on PORT { ${port} }`);
});
// Handele rejection outside express
process.on("unhandledRejection", (err) => {
    console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
        console.error(`Shutting down...`);
        process.exit(1);
    });
});
exports.default = app;
