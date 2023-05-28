import { useNavigate } from "react-router-dom";

import SidebarButton from "./sidebarButton";
import { RootState, useAppSelector } from "../store";


export default function Sidebar(props : any) {
    const navigator = useNavigate()

    const sessions = useAppSelector((state: RootState) => state.sessions);
    const userName = useAppSelector((state : RootState) => state.user.username);

    return <div className={"sidebar"}>
        <div className={"sidebar--container"}>
            <div className={"sidebar--container--heading"}>
                <div className={"sidebar--container--heading--user"}>
                    <div className={"sidebar--container--heading--user--image"} >
                        <p>{userName}</p>
                    </div>
                    <p className={"sidebar--container--heading--user--username"}>{userName}</p>
                </div>
                <div className={"line"}/>
            </div>
            <div className={"sidebar--container--chats"}>
                <SidebarButton type={"add"}/>
                <div className={"line"} style={{margin: "15px 0"}}/>
                {sessions.values.map((value : any) =>
                    <SidebarButton type={"chat"} chatName={value.name} id={value.id}/>
                )}
            </div>
            <div className={"sidebar--container--lower"} onClick={() => {navigator('/')}}>
                <div className={"sidebar--container--lower--exit"}>
                    <p className={"sidebar--container--lower--exit__text"}>Exit</p>
                </div>
            </div>
        </div>
    </div>
}
