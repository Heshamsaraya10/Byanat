import { Express } from "express-serve-static-core";

import userRouter from "../Router/user-route";

const mountRoutes = (app: Express): void => {
  app.use("/api/v1/user", userRouter);
};

export default mountRoutes;
