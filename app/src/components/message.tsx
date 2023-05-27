import { useState } from "react";

import { messages } from "../devtools/info";

import gpt from "../assets/gpt.svg"
import {RootState, useAppSelector} from "../store";
import {messageTypes} from "../slice/messagesSlice";

export default function Messages(props : any) {
    const [username, setUsername] = useState<string | null>("iamvirgoo")

    return <div className={"messages"}>
        {props.messages?.map((value : any) =>
            <>
                {value.messageType == messageTypes.bot
                    ? <div className={"messages--message"} style={{display: "flex", justifyContent: "flex-start"}}>
                        <div className={"messages--message--wrapper"}>
                            <div className={"messages--message--wrapper--avatar__gpt"}>
                                <img src={gpt} alt=""/>
                            </div>
                            <p className={"messages--message--text"}>{value.messageText}</p>
                        </div>
                    </div>
                    : <>{value.messageType == messageTypes.user
                        ? <div className={"messages--message"} style={{display: "flex", justifyContent: "flex-end"}}>
                            <div className={"messages--message--wrapper"}>
                                <p className={"messages--message--text"}>{value.messageText}</p>
                                <div className={"messages--message--wrapper--avatar"}>
                                    <div className={"messages--message--wrapper--avatar--img"} >
                                        <p>{username?.at(0)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className={"messages--message"} style={{display: "flex", justifyContent: "center"}}>
                            <div className={"messages--message--wrapper"} style={{border: "1px solid #CBA135"}}>
                                <p className={"messages--message--text"} style={{letterSpacing: "0.4em"}}>{value.messageText}</p>
                            </div>
                        </div>
                    }</>
                }
            </>
        )}
    </div>
}