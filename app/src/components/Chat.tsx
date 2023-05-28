import Messages from "./Messages";
import { RootState } from "../store";
import { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { useGetMessagesQuery } from "../middleware/auximBackend";
import { useSelector } from "react-redux";
import { Session } from "../slice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";


export default function Chat(props : {
  chatId: number
}) {
    const session = useSelector((state: RootState) => state.sessions.values.at(props.chatId) as Session);
    const { data, error, isLoading } = useGetMessagesQuery( props.chatId );

    const [message, setMessage] = useState<string | null>();

    const sendMessageCallback = () => {
    }

    return <>
      <div className={"chat--container"}>{
        isLoading ? (
          <h1>Wait, chat is loading...</h1>
        ) : error as FetchBaseQueryError !== undefined ? (
          <>
            <h1>Error appeared!</h1>
            <h2>Status code { (error as FetchBaseQueryError).status }</h2>
            <p>Body: {JSON.stringify( (error as FetchBaseQueryError).data )}</p>
          </>
        ) : (
          <>
            <Messages chatId={session.id} 
                  />
            <div className={"chat--container--form"}>
              <input className={"chat--container--form--input"}
                   type="text"
                   placeholder="What do you want to say?"
                   onChange={(event) => setMessage(event.target.value)}
                   autoComplete="off"
                   required/>
              <button className={"chat--container--form--button"}
                onClick={() => sendMessageCallback()}>
              <ArrowIcon/>
            </button>
          </div>
        </>
      )}
      </div>
    </>
}
