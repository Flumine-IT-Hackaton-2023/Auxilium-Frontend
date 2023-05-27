import { useState } from "react";

import gpt from "../assets/gpt.svg"

export default function Dropdown(props : any) {
    const [confirm_role, setConfirm_role] = useState<string | null>()
    const all_roles = ["eblan", "gondon", "uebak", "huilo", "eblan", "gondon", "uebak", "huilo"]

    const [confirmBot, setConfirmBot] = useState<string | null>()
    const bots =["GPT-3.5 turbo", "GPT-3.5", "GPT-3"]

    return <div className={"dropdown"}>
        {props.type == "roles"
            ? <><div className={"dropdown--info"}>
                {confirm_role == null
                    ? <p className={"dropdown--info__placeholder"}>Roles...</p>
                    : <p className={"dropdown--info__value"} onClick={() => {setConfirm_role(null)}}>{confirm_role}</p>
                }
            </div>
            <div className={"dropdown--info--wrapper"}/>
                <div className={"dropdown--info--content"}>
                    {all_roles.map((value) =>
                        <div className={"dropdown--info--content--value"} onClick={() => {
                            setConfirm_role(value)
                    }}>
                        <p className={"dropdown--info--content--value__text"}>{value}</p>
                </div>)}
            </div></>
            : <><div className={"dropdown--info"}>
                {confirmBot == null
                    ? <p className={"dropdown--info__placeholder"}>Choose a bot...</p>
                    : <p className={"dropdown--info__value"} onClick={() => {setConfirmBot(null)}}>{confirmBot}</p>
                }
            </div>
                <div className={"dropdown--info--wrapper"}/>
                <div className={"dropdown--info--content"}>
                    {bots.map((value) =>
                        <div className={"dropdown--info--content--value"} onClick={() => {
                            setConfirmBot(value)
                        }}>
                            <img className={"dropdown--info--content--value__image"} src={gpt} alt=""/>
                            <p className={"dropdown--info--content--value__text"}>{value}</p>
                        </div>)}
                </div></>
        }
    </div>
}