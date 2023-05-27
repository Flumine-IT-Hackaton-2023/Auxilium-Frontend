import { useState } from "react";

import Modal from "react-modal"
import {Link, useNavigate} from "react-router-dom";

import Dropdown from "./dropdown";

export default function SidebarButton(props : any) {
    const navigator = useNavigate()

    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                    <input type="text" className={"modal--content--input"} placeholder={"Сome up with a chat name"}/>
                    <Dropdown type={"roles"}/>
                    <Dropdown type={""}/>
                    <button className={"modal--content--create-btn"}>Create</button>
                </div>
            </div>
        </Modal>
    </div>
}