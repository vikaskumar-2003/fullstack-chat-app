import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk = createAsyncThunk("user/fetchById", async () => {
    console.log("hello");
    
})