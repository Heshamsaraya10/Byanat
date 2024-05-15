"use strict";
// import { createConnection } from "typeorm";
Object.defineProperty(exports, "__esModule", { value: true });
// createConnection({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "admin1232123",
//   database: "postgres",
//   entities: ["src/Entities/*{.ts,.js}"],
//   migrations: ["src/migrations/*{.ts,.js}"],
//   synchronize: false,
// })
//   .then((connection) => {
//     console.log("Database connected successfully");
//   })
//   .catch((error) => {
//     console.error("Error connecting to database:", error);
//   });
// export default createConnection;
// src/databaseConfig/database.ts
// src/databaseConfig/database.ts
const typeorm_1 = require("typeorm");
const connectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin1232123",
    database: "postgres",
    synchronize: true,
    entities: [__dirname + "/../Entities/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../migrations/*{.ts,.js}"],
};
(0, typeorm_1.createConnection)(connectionOptions)
    .then((connection) => {
    console.log("Database connected successfully");
})
    .catch((error) => {
    console.error("Error connecting to database:", error);
});
