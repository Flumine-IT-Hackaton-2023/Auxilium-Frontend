import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum messageTypes {
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
    values : [
        {
            messageText : "Ты будешь работать?",
            messageTime : "26.05.2023, 16:16:30",
            messageType : messageTypes.user
        },
        {
            messageText : "Нет",
            messageTime : "26.05.2023, 16:17:30",
            messageType : messageTypes.bot
        },
        {
            messageText : "Почему?",
            messageTime : "26.05.2023, 16:16:30",
            messageType : messageTypes.user
        },
        {
            messageText : "Потому.",
            messageTime : "26.05.2023, 16:18:30",
            messageType : messageTypes.bot
        },
        {
            messageText : "Гондон",
            messageTime : "26.05.2023, 16:18:40",
            messageType : messageTypes.user
        }
    ]
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