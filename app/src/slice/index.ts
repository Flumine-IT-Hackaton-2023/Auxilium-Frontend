// Direct re-export
import userSliceReducer from './user';
import { UserModel } from "./user";

export {
  userSliceReducer,
};

export type User = UserModel;

