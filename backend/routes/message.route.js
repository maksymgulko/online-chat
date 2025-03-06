import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  getMessagesController,
  getUsersController,
  sendMessageController,
} from "../controllers/message.controller.js";

const router = new Router();

router.get("/users", protectRoute, getUsersController);

router.get("/:id", protectRoute, getMessagesController);

router.post("/send/:id", protectRoute, sendMessageController);

export default router;
