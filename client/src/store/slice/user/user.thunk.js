import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import instance from "../../../component/utilities/axiosinstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({username,password},{rejectWithValue}) => {
    try {
        const response = await instance.post("/user/login", {
            username,
            password
        })
        console.log("hiiiii");
        
        console.log(response)
        return response.data
    } catch (error) {
     
        const errorOutput=error?.response?.data.errMessage
        toast.error(error.message)
        return rejectWithValue(errorOutput)
    }
    
})

export const registerUserThunk = createAsyncThunk("user/register", async ({username,password,gender,fullname},{rejectWithValue}) => {
    try {
        const response = await instance.post("/user/register", {
            fullname,
            username,
            password,
            gender,
        })
        toast.success("signup successfully")
        return response.data
    } catch (error) {
     
        const errorOutput=error?.response?.data.errMessage
        toast.error(error.message)
        return rejectWithValue(errorOutput)
    }
    
})


export const logoutUserThunk = createAsyncThunk("user/logout", async (_,{rejectWithValue}) => {
    try {
        const response = await instance.post("/user/logout"  )
        toast.success("Logout successfully")
        return response.data
    } catch (error) {
     
        const errorOutput=error?.response?.data.errMessage
        toast.error(error.message)
        return rejectWithValue(errorOutput)
    }
    
})

export const getUserProfileThunk = createAsyncThunk("user/getProfile", async (_,{rejectWithValue}) => {
    try {
        const response = await instance.get("/user/getProfile"  )
       
        return response.data
    } catch (error) {
     
        const errorOutput=error?.response?.data.errMessage
      
        return rejectWithValue(errorOutput)
    }
    
})


export const getOtherUserThunk = createAsyncThunk("user/getOtherUser", async (_,{rejectWithValue}) => {
    try {
        const response = await instance.get("/user/getOtherUser"  )
       console.log("get pther",response);
       
        return response.data
    } catch (error) {
     
        const errorOutput=error?.response?.data.errMessage
      
        return rejectWithValue(errorOutput)
    }
    
})