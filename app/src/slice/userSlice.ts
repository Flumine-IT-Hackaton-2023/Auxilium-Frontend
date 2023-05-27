import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserModel {
  username: string,
  authenticate: boolean
}

const initialState: UserModel = {
  username : 'admin',
  authenticate : false
};

export interface authRequest {
  login : string;
  password : string
}

export interface registerRequest {
  login : string;
  email : string
}

export const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {
    set_username: (state, action : PayloadAction<string>) => {
      state.username = action.payload;
    },
    set_auth: (state, action : PayloadAction<boolean>) => {
      state.authenticate = action.payload;
    }
  }
});

export const {
    set_username,
    set_auth
} = userSlice.actions

// NOTE: While there is no actions for user, left it like that
// export {} = userSlice.actions;

export default userSlice.reducer;

