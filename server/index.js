import dotenv from "dotenv"
dotenv.config({quiet:true})

import express from "express"
import userRouter from "./Routes/user.routes.js"
import { connectionDB } from "./db/connection.db.js"
import { errorMiddleware } from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"
import messageRouter from "./Routes/message.route.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}
))

const PORT = process.env.PORT||9000

app.use("/api/v1/user", userRouter)
app.use("/api/v1/message",messageRouter )


app.use(errorMiddleware)

app.listen(9000, (error) => {
    console.log("server is running");
    connectionDB()
})