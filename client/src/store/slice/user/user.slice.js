import { createSlice } from "@reduxjs/toolkit";
import { getOtherUserThunk, getUserProfileThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from "./user.thunk";

const initialState = {
    isAuthenticated: false,
    screenLoading: true,
    userProfile: null,
    buttonLoading: false,
    otherUsers:null
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
            state.buttonLoading=true
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload?.responseData?.userProfile
            state.buttonLoading = false
            state.isAuthenticated=true
        });
          builder.addCase(loginUserThunk.rejected, (state, action) => {
             state.buttonLoading=false
          })
        
        //register user
          builder.addCase(registerUserThunk.pending, (state, action) => {
             state.buttonLoading=true
        });
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.buttonLoading = true
            state.userProfile = action.payload?.responseData?.userProfile
            state.isAuthenticated=true
        });
          builder.addCase(registerUserThunk.rejected, (state, action) => {
             state.buttonLoading=true
          })
        
        //logout user
          builder.addCase(logoutUserThunk.pending, (state, action) => {
             state.buttonLoading=true
        });
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            state.buttonLoading = false
            state.userProfile = null
            state.isAuthenticated=false
        });
          builder.addCase(logoutUserThunk.rejected, (state, action) => {
             state.buttonLoading=false
          })
        
        //get-me

         builder.addCase(getUserProfileThunk.pending, (state, action) => {
             state.screenLoading=true
        });
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            state.screenLoading = false
            state.userProfile = null
            state.isAuthenticated=true
        });
          builder.addCase(getUserProfileThunk.rejected, (state, action) => {
             state.screenLoading=false
          }
        )
        
        //get other user

         builder.addCase(getOtherUserThunk.pending, (state, action) => {
             state.screenLoading=true
        });
        builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
            state.screenLoading = false
             state.otherUsers=action.payload?.responseData
          
        });
          builder.addCase(getOtherUserThunk.rejected, (state, action) => {
             state.screenLoading=false
          }
        )
    }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer