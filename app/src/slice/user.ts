import { createSlice } from "@reduxjs/toolkit";

export interface UserModel {
  id: Number,
  name: string,
};

const initialState: UserModel = {
  id: -1,
  name: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

// NOTE: While there is no actions for user, left it like that
// export {} = userSlice.actions;

export default userSlice.reducer;

