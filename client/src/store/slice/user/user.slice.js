import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

const initialState = {
    isAuthenticated: false,
    screenLoading:false
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        Login: () => {
            console.log("login");
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, (state, action) => {
            
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            
        });
          builder.addCase(loginUserThunk.rejected, (state, action) => {
            
        })
    }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer