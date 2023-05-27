import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SidebarButton from "./sidebarButton";

export default function Sidebar() {
    const navigator = useNavigate()

    const [username, setUsername] = useState<string | null>("iamvirgoo")

    return <div className={"sidebar"}>
        <div className={"sidebar--container"}>
            <div className={"sidebar--container--heading"}>
                <div className={"sidebar--container--heading--user"}>
                    <div className={"sidebar--container--heading--user--image"} >
                        <p>{username?.at(0)}</p>
                    </div>
                    <p className={"sidebar--container--heading--user--username"}>{username}</p>
                </div>
                <div className={"line"}/>
            </div>
            <div className={"sidebar--container--chats"}>
                <SidebarButton type={"add"}/>
            </div>
            <div className={"sidebar--container--lower"} onClick={() => {navigator('/')}}>
                <div className={"sidebar--container--lower--exit"}>
                    <p className={"sidebar--container--lower--exit__text"}>Exit</p>
                </div>
            </div>
        </div>
    </div>
}