import express, { Router, RequestHandler } from "express";
import { createUser, getUser, getAllUsers } from "../services/user-service";

const router: Router = Router();

router.route("/").post(createUser as RequestHandler);
router.get("/:id", getUser as RequestHandler);
router.get("/", getAllUsers as RequestHandler);

export default router;
