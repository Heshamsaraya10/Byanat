import morgan from "morgan";
import express, { Express, json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



export default (app: Express) => {
  app.use(morgan("dev"));
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(cors());
  app.use(cookieParser());
};
