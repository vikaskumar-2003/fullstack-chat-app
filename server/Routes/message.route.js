import { Router } from "express";

import { isAuthenticated } from "../middleware/auth.middleware.js";
import { getMessage, sendMessageController } from "../controllers/message.controller.js";

const messageRouter = Router()


messageRouter.post("/send/:receiverId",isAuthenticated,sendMessageController)
messageRouter.get("/get-message/:otherParticipantedId",isAuthenticated,getMessage)
export default messageRouter