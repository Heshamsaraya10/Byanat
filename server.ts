import "reflect-metadata";
import morgan from "morgan";
import "dotenv/config";
import { Client } from "pg";
import express from "express";
import appSetup from "./src/utils/app-setup";
import mountRoutes from "./src/hooks/index";
// import Connection from "./src/databaseConfig/database";

const app = express();
appSetup(app);
mountRoutes(app);

//conncet with db
// Connection();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server Started on PORT { ${port} }`);
});

// Handele rejection outside express
process.on("unhandledRejection", (err: Error) => {
  console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down...`);
    process.exit(1);
  });
});

export default app;
