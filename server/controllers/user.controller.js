import { response } from "express";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandles.utils.js";
import { errorHandler } from "../utils/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = asyncHandler(async (req, res, next) => {
  const { fullname, username, password, gender } = req.body;

  if (!fullname || !username || !password || !gender  ) {
    return next(new errorHandler("all field are required", 400));
  }

  const existUser = await User.findOne({ username });

  console.log("exist user",existUser);
  
  if (existUser) {
    return next(new errorHandler("user already exists", 400));
  }

  const avatarType = gender === "male" ? "boy" : "girl";
  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    fullname,
    password: hashPassword,
    gender,
    avatar,
  });

  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  console.log(process.env.JWT_SECRET_KEY);

  res
    .status(200)
    .cookie("token",token,{
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      responseData: {
        newUser,
        token,
      },
    });
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(
      new errorHandler("please enter a valid username or password", 400),
    );
  }

  const user = await User.findOne({ username });
  if (!user) {
    return next(new errorHandler("user not exist", 400));
  }

  const comparedPassword = await bcrypt.compare(password, user.password);
  console.log(comparedPassword);

  if (!comparedPassword) {
    return next(
      new errorHandler("Please enter a valid username or password ", 400),
    );
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res
    .status(200)
    .cookie("token",token,{
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    })
    .json({
      success: true,
      responseData: {
        user,
        token,
      },
    });
});


export const getUser = asyncHandler(async(req,res,next) => {
    
    const userId = req.user._id
    console.log("hi");
    
    console.log(userId);
     
      
    const profile=await User.findById(userId)

    res.status(200).json({
        success: true,
        responseData:profile
    })
    

})



export const logout = asyncHandler(async(req,res,next) => {
    
    

   res
    .status(200)
    .cookie("token","",{
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    })
    .json({
      success: true,
       message:"logout success fully"
    });


})


export const getOtherUser = asyncHandler(async (req, res, next) => {
  
  const otherUsers = await User.find({ _id: { $ne: req.user._id } })
  
  res.status(200).json({
    success: true,
    responseData:otherUsers
  })

})
