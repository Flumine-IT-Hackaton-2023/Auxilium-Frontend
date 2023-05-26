import { useState } from "react";

import { messages } from "../devtools/info";

import gpt from "../assets/gpt.svg"

export default function Messages(props : any) {
    const [username, setUsername] = useState<string | null>("iamvirgoo")

    return <div className={"messages"}>
        {messages.map((value, index, array) =>
            <>
                {value.type == "bot"
                    ? <div className={"messages--message"} style={{display: "flex", justifyContent: "flex-start"}}>
                        <div className={"messages--message--wrapper"}>
                            <div className={"messages--message--wrapper--avatar__gpt"}>
                                <img src={gpt} alt=""/>
                            </div>
                            <p className={"messages--message--text"}>{value.text}</p>
                        </div>
                    </div>
                    : <div className={"messages--message"} style={{display: "flex", justifyContent: "flex-end"}}>
                        <div className={"messages--message--wrapper"}>
                            <p className={"messages--message--text"}>{value.text}</p>
                            <div className={"messages--message--wrapper--avatar"}>
                                <div className={"messages--message--wrapper--avatar--img"} >
                                    <p>{username?.at(0)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )}
    </div>
}

/*
* <div className={"messages"}>
        {props.messages.map(({ user, message }, i) => {
            const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
            const className = itsMe ? "messages--me" : "user";

            return (
                <div key={i} className={`${styles.message} ${className}`}>
                    <span className={styles.user}>{user.name}</span>

                    <div className={styles.text}>{message}</div>
                </div>
            );
        })}
    </div>
* */