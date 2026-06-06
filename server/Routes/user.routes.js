import { Router } from "express";
import { getUser, login, logout, register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/getProfile",isAuthenticated,getUser)
router.post("/logout",isAuthenticated,logout)

export default router