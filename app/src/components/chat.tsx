import Send from "../assets/send";
import send from "../assets/send.svg";
import {useState} from "react";

export default function Chat() {
    const [color, setColor] = useState("");

    const handleSubmit = () => {}

    const handleChange = () => {}

    return <div className={"chat--container"}>
        <form className={"chat--container--form"} onSubmit={handleSubmit}>
            <input className={"chat--container--form--input"}
                   type="text"
                   name="message"
                   placeholder="What do you want to say?"
                   onChange={handleChange}
                   autoComplete="off"
                   required/>
            <button className={"chat--container--form--button"}
                    type={'submit'}
                    onSubmit={handleSubmit}
                    onMouseEnter={() => setColor("#0000")}
            >
                <Send className={"chat--container--form--button--img"} src={send} alt=""
                      color={color}
                />
            </button>
            {/*<input className={"app--container--content--form--button"}
                               type="submit"
                               onSubmit={handleSubmit}
                               value="Send"/>*/}
        </form>
    </div>
}