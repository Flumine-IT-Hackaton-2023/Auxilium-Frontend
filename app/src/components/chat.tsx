import Messages from "./message"
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { useState } from "react";
import { messageTypes } from "../slice/messagesSlice";
import { add_message } from "../slice/sessionsSlice";

export default function Chat(props : any) {
    const time = new Date()

    const dispatch = useAppDispatch()
    const SESSIONS = useAppSelector((state : RootState) => state.sessions.values)

    const [message, setMessage] = useState<string | null>()

    return <div className={"chat--container"}>
        <Messages messages={SESSIONS[props.chatId].messages.values}/>
        <form className={"chat--container--form"}>
            <input className={"chat--container--form--input"}
                   type="text"
                   name="message"
                   placeholder="What do you want to say?"
                   onChange={(event) => setMessage(event.target.value)}
                   autoComplete="off"
                   required/>
            <button className={"chat--container--form--button"}
                    onClick={() => {
                        if (message != null) {
                            dispatch(add_message({
                                messageText: message,
                                messageTime: time.toLocaleTimeString(),
                                messageType: messageTypes.user
                            }))
                        }
                    }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.368084 0.225597C0.51737 0.103625 0.69873 0.0274053 0.890329 0.0061165C1.08193 -0.0151723 1.2756 0.0193773 1.44802 0.105605L31.4461 15.1046C31.6125 15.1876 31.7525 15.3153 31.8503 15.4733C31.9482 15.6314 32 15.8137 32 15.9996C32 16.1855 31.9482 16.3677 31.8503 16.5258C31.7525 16.6839 31.6125 16.8116 31.4461 16.8945L1.44802 31.8936C1.27577 31.9798 1.08227 32.0145 0.89079 31.9934C0.699306 31.9724 0.517988 31.8964 0.368638 31.7747C0.219288 31.6531 0.108265 31.4908 0.0489185 31.3076C-0.0104282 31.1243 -0.0155722 30.9278 0.0341056 30.7417L3.96585 16.0006L0.0341056 1.25953C-0.015811 1.07334 -0.0108437 0.876682 0.0484098 0.693245C0.107663 0.509807 0.218677 0.347407 0.368084 0.225597ZM5.76774 17.0005L2.53995 29.1118L28.7623 16.0006L2.53795 2.88943L5.76774 15.0007H18.9989C19.2641 15.0007 19.5184 15.106 19.706 15.2935C19.8935 15.4811 19.9988 15.7354 19.9988 16.0006C19.9988 16.2658 19.8935 16.5201 19.706 16.7077C19.5184 16.8952 19.2641 17.0005 18.9989 17.0005H5.76774Z" fill="#CBA135" fillOpacity="0.7"/>
                </svg>
            </button>
        </form>
    </div>
}