import { useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";

import Chat from "../../components/chat";
import Sidebar from "../../components/sidebar";

import pattern from "../../assets/pattern.webp";
import {RootState, useAppSelector} from "../../store";

export default function AppIndex() {
    const [chatNumber, setChatNumber] = useState<number>(0)

    const SESSIONS = useAppSelector((state : RootState) => state.sessions.values)

    return <main>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map(() => <div className={"lines--line"} style={{height: window.innerHeight}}/>)
            }
        </div>
        {/*<section className={"app"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <animated.div className={"app--container"} style={useSpring({
                from : {
                    opacity : 0
                },
                to : {
                    opacity : 1
                },
                delay : 3000
            })}>
                <Sidebar SESSIONS={SESSIONS}/>
                <Chat chatId={chatNumber}/>
            </animated.div>
        </section>*/}
    </main>
}