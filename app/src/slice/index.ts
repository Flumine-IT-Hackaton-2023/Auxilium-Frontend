// Direct re-export
import userSliceReducer, { UserModel } from './userSlice';
import sessionSliceReducer, { SessionModel, SessionsModel } from "./sessionsSlice"
import messagesSliceReducer, { MessageModel, MessagesModel } from "./messagesSlice"
import authSliceReducer, { AuthModel } from "./authSlice";

export {
  userSliceReducer,
  sessionSliceReducer,
  messagesSliceReducer,
  authSliceReducer
};

export type User = UserModel;

export type Sessions = SessionsModel
export type Session = SessionModel

export type Messages = MessagesModel
export type Message = MessageModel

export type Auth = AuthModel