import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessagesModel } from "./messagesSlice";

export interface SessionModel {
    id: number,
    name: string,
    role: string,
    modelName: string,
    messages: MessagesModel
}

export interface SessionsModel {
    values: Array<SessionModel>
}

const initialState : SessionsModel = {
    values: []
}

export const sessionSlice = createSlice({
    name : "session",
    initialState,
    reducers : {
        add_sessions: (state, action : PayloadAction<SessionModel>) => {
            state.values.push(action.payload)
        }
    }
})

export const {
    add_sessions
} = sessionSlice.actions

export default sessionSlice.reducer