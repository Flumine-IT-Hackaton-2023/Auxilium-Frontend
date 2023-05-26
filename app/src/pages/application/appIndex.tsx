import { useState } from "react";

import Chat from "../../components/chat";
import Sidebar from "../../components/sidebar";

import pattern from "../../assets/pattern.webp";

export default function AppIndex() {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = () => {}

    const handleChange = () => {}

    return <main>
        <div className={"lines"}>
            {Array.from(
                {length: window.innerWidth / 100},
                (_, index) => index + 1)
                .map(() => <div className={"lines--line"} style={{height: window.innerHeight}}/>)
            }
        </div>
        <section className={"app"}>
            <img className={"pattern"} src={pattern} alt=""/>
            <div className={"app--container"}>
                <Sidebar/>
                <Chat/>
            </div>
        </section>
    </main>
}