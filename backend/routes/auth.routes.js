import express from "express"
import { signUp } from "../controllers/auth.controller.js"
import { logIn } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signUp",signUp)
authRouter.post("/logIn",logIn)

export default authRouter