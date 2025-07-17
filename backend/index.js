import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
dotenv.config()
const port= process.env.PORT
let app= express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

import bookmarkRouter from "./routes/bookmark.route.js"

app.use("/api/auth",authRouter)
app.use("/api/user", userRouter )
app.use("/api/bookmark",bookmarkRouter)

app.listen(port,()=>{
    connectDb();
    console.log(`Server Started at ${port}`)
})