import dotenv from "dotenv"
dotenv.config({quiet:true})

import express from "express"
import userRouter from "./Routes/user.routes.js"
import { connectionDB } from "./db/connection.db.js"
import { errorMiddleware } from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT||9000

app.use("/api/v1/user", userRouter)


app.use(errorMiddleware)

app.listen(9000, (error) => {
    console.log("server is running");
    connectionDB()
})