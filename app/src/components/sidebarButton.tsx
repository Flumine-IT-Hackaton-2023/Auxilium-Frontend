import { useState } from "react";

import Modal from "react-modal"
import { useNavigate } from "react-router-dom";

import { RootState, useAppDispatch, useAppSelector } from "../store";
import { add_sessions } from "../slice/sessionsSlice";
import gpt from "../assets/gpt.svg";
import { useCreateChatQuery } from "../middleware/auximBackend";
import { useSelector } from "react-redux";

export default function SidebarButton(props : any) {
    const navigator = useNavigate()

    const dispatch = useAppDispatch()
    const SESSIONS = useAppSelector((state : RootState) => state.sessions.values)

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chatName, setChatName] = useState<string>("")

    const [confirm_role, setConfirm_role] = useState<string>()
    const all_roles = ["sudo", "dan", "politic", "priest"]

    const [confirmBot, setConfirmBot] = useState<string>()
    const bots = ["GPT-3.5 turbo", "GPT-3.5", "GPT-3"];

    const user_name = useSelector((state: RootState) => state.user.username);


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '5px',
            backgroundColor: 'rgba(10, 10, 10, 0.2)',
            border: 'none'
        }
    };

    let subtitle

    const Open = () => setModalIsOpen(true);
    const Close = () => setModalIsOpen(false)

    return <div className={"sidebar-button"}>
        { props.type == "add"
            ? <button className={"sidebar-button--add"}
                onClick={Open}
            >
                <p className={"sidebar-button--add--cnt"}>
                    Add new
                </p>
            </button>
            : <button className={"sidebar-button--chat"} onClick={() => {
                navigator("" + props.id);
                // @ts-ignore
                window.location.reload(1)
            }}>
                <p className={"sidebar-button--add--cnt"}>
                    {props.chatName}
                </p>
            </button>
        }
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={Close}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName='modal--overlay'
        >
            <div className="modal">
                <div className="modal--heading">
                    <h3 ref={(_subtitle) => (subtitle = _subtitle)} className="modal--heading--title">
                        Create a new chat
                    </h3>
                    <div className={"line"}/>
                </div>
                <div className={"modal--content"}>
                    <input type="text" className={"modal--content--input"} placeholder={"Сome up with a chat name"}
                           onChange={(event) => {setChatName(event.target.value)}}/>
                    <div className={"dropdown"}>
                        <div className={"dropdown--info"}>
                            {confirm_role == null
                                ? <p className={"dropdown--info__placeholder"}>Roles...</p>
                                : <p className={"dropdown--info__value"} onClick={() => {
                                    // @ts-ignore
                                    setConfirm_role(null)}}>{confirm_role}</p>
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
                        </div>
                    </div>
                    <div className={"dropdown"}>
                        <div className={"dropdown--info"}>
                            {confirmBot == null
                                ? <p className={"dropdown--info__placeholder"}>Choose a bot...</p>
                                : <p className={"dropdown--info__value"} onClick={() => {
                                    // @ts-ignore
                                    setConfirmBot(null)}}>{confirmBot}</p>
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
                        </div>
                    </div>
                    <button className={"modal--content--create-btn"} onClick={() => {
                        // @ts-ignore
                        dispatch(add_sessions({
                            id : SESSIONS.length,
                            name : chatName,
                            role : confirm_role,
                            modelName : confirmBot,
                            messages : { values : [] }
                        }))
                        console.log({
                            id : SESSIONS.length,
                            name : chatName,
                            role : confirm_role,
                            modelName : confirmBot,
                            messages : { values : [] }
                        })
                        useCreateChatQuery({ 
                            modelType: confirmBot as string, 
                            role: confirm_role as string, 
                            name: user_name });
                    }}>Create</button>
                </div>
            </div>
        </Modal>
    </div>
}