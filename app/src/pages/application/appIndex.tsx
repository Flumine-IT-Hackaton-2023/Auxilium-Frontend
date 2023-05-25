import { useState } from "react";

import pattern from "../../assets/pattern.webp";

export default function AppIndex() {
    const [message, setMessage] = useState("");

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
                <div className={"app--container--content"}>
                    <form className={"app--container--content--form"} onSubmit={handleSubmit}>
                        <input className={"app--container--content--form--input"}
                               type="text"
                               name="message"
                               placeholder="What do you want to say?"
                               onChange={handleChange}
                               autoComplete="off"
                               required/>
                        <input className={"app--container--content--form--button"}
                               type="submit"
                               onSubmit={handleSubmit}
                               value="Send"/>
                    </form>
                </div>
            </div>
        </section>
    </main>
}