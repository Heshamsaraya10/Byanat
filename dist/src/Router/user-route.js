"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = require("../services/user-service");
const router = (0, express_1.Router)();
router.route("/").post(user_service_1.createUser);
router.get("/:id", user_service_1.getUser);
router.get("/", user_service_1.getAllUsers);
exports.default = router;
