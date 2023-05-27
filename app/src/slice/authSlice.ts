import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "./userSlice";
import {RootState, useAppSelector} from "../store";

export interface AuthModel {
    accessToken : string,
    refreshToken : string,
    user : UserModel
}

const initialState : AuthModel = {
    accessToken : "",
    refreshToken : "",
    user : {
        username : useAppSelector((state : RootState) => state.user.username),
        authenticate : useAppSelector((state : RootState) => state.user.authenticate)
    }
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        userLoggedIn: (state, action : PayloadAction<AuthModel>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        }
    }
})

export const {
    userLoggedIn
} = authSlice.actions

export default authSlice.reducer