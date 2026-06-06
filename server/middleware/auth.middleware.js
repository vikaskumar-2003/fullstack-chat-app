import { asyncHandler } from "../utils/asyncHandles.utils.js";
import { errorHandler } from "../utils/errorHandler.utility.js";
import jwt from "jsonwebtoken"

export const isAuthenticated  = asyncHandler(async (req, res, next) => {
    console.log("middleware start");
    
    const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1]
    console.log(token);
    
    if (!token) {
        console.log("not token found");
        
        return next(new errorHandler("invalid token",400))
    }
     
     
    const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(tokenData);
    
      req.user=tokenData
    next()
})