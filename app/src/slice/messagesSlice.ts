import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum messageTypes {
    user,
    bot,
    system
}

export interface MessageModel {
    messageText : string,
    messageTime : string,
    messageType : messageTypes
}

export interface MessagesModel {
    values : Array<MessageModel>
}

const initialState : MessagesModel = {
    values : []
}

export const messagesSlice = createSlice({
    name : "messages",
    initialState,
    reducers : {
        append_messages: (state, action : PayloadAction<MessageModel>) => {
            state.values.push(action.payload)
        }
    }
})

export const {
    append_messages
} = messagesSlice.actions

export default messagesSlice.reducer