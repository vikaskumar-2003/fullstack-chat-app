import { Router } from "express";
import { getOtherUser, getUser, login, logout, register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/getProfile", isAuthenticated, getUser)
router.get("/getOtherUser",isAuthenticated,getOtherUser)
router.post("/logout",isAuthenticated,logout)

export default router