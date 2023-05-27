import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {MessageModel, MessagesModel, messageTypes} from "./messagesSlice";

export interface SessionModel {
    id: number,
    name: string,
    role?: string,
    modelName?: string,
    open: boolean
    messages: MessagesModel
}

export interface SessionsModel {
    values: Array<SessionModel>
}

const initialState : SessionsModel = {
    values: [
        {
            id : 0,
            name : "Chat #1",
            role : "eblan",
            modelName : "GPT-3.5",
            open : true,
            messages : {
                values: [
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
        },
        {
            id : 1,
            name : "Chat #2",
            role : "debil",
            modelName : "GPT-3.5 turbo",
            open : false,
            messages : {
                values : [
                    {
                        messageText : "Расскажи, в чём смысл жизни?",
                        messageTime : "26.05.2023, 16:16:30",
                        messageType : messageTypes.user
                    },
                    {
                        messageText : "42.",
                        messageTime : "26.05.2023, 16:17:30",
                        messageType : messageTypes.bot
                    },
                    {
                        messageText : "Почему?",
                        messageTime : "26.05.2023, 16:16:30",
                        messageType : messageTypes.user
                    },
                    {
                        messageText : "Надо так",
                        messageTime : "26.05.2023, 16:18:30",
                        messageType : messageTypes.bot
                    }
                ]
            }
        }
    ]
}

export const sessionSlice = createSlice({
    name : "session",
    initialState,
    reducers : {
        add_sessions: (state, action : PayloadAction<SessionModel>) => {
            state.values.push(action.payload)
        },
        add_message: (state, action : PayloadAction<MessageModel>) => {
            state.values[0].messages.values.push(action.payload)
        },
    }
})

export const {
    add_sessions,
    add_message
} = sessionSlice.actions

export default sessionSlice.reducer