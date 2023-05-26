import {useState} from "react";

export default function Sidebar() {
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

            </div>
        </div>
    </div>
}