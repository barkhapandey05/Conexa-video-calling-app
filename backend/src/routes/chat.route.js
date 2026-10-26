import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getStreanToken } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/token", protectRoute ,getStreanToken);

export default router   ;