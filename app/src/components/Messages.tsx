import { useSelector } from "react-redux";

import gpt from "../assets/gpt.svg"
import { Session } from "../slice";
import { messageTypes } from "../slice/messagesSlice";
import { RootState } from "../store";

export default function Messages(props : {
  chatId: number
}) {

    const userName = useSelector((state: RootState) => state.user.username);
    const messages = useSelector((state: RootState) => 
      (state.sessions.values.at(props.chatId) as Session).messages.values);

    return <div className={"messages"}>
        { messages.map((value : any) =>
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
                                        <p>{userName}</p>
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
