/// Connection to original backend service which provides all bots and 
///   connections.
///
/// @author AssertionBit
/// @license MIT

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Message, User } from "../slice";
import { authRequest, registerRequest } from "../slice/userSlice";
import { isMessage } from "./schemaValidator";
import { io, Socket } from 'socket.io-client';
import { messageTypes } from '../slice/messagesSlice';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export type Channel = 'redux' | 'general';

enum ChatEvent {
  SendMessage = 'send_message',
  RequestAllMessages = 'request_all_messages',
  SendAllMessages = 'send_all_messages',
  ReceiveMessage = 'receive_message',
}

export let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export function getSocket(chatId: number) {
  if (!socket) {
    socket = io(`wss://localhost/chat/${chatId}`, {
      withCredentials: true
    });
  }
  return socket;
}

export const auxiliumBackendApi = createApi({
  reducerPath: 'auxiliumBackendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:80/api'
  }),
  endpoints: builder => ({
    auth: builder.query<User, Partial<authRequest>>({
      query: ({...auth}) => ({
        url: "/authenticate",
        headers : {
          "Content-Type": "application/json"
        },
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(auth)
      })
    }),
    registration: builder.query<User, Partial<registerRequest>>({
      query: ({...auth}) => ({
        url: "/register",
        headers : {
          "Content-Type": "application/json"
        },
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(auth)
      })
    }),
    createChat: builder.query<void, void>({
      query: ({...auth}) => {
        url: "/createroom",

      }
    })
    // sendMessage: builder.query<Message, number>({
    //  query: (chatId: number) => `/chat/${chatId}/sendMessage`,
    //  queryFn: (chatMessageContent: string) => {
    //    const socket = getSocket(chatId);
    //    return new Promise(ChatEvent.SendMessage, chatMessageContent, (chat: string) => {
    //      
    //    });
    //  }
    //}),
    getMessages: builder.query<Message[], number>({
      query: (chatId: number) => `/topic/chat/${chatId}/`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = getSocket(arg);

        try {
          await cacheDataLoaded;

          // Listener of messages. Push message to array if available.
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            if (!isMessage(data) || data.chatId !== arg) return;

            updateCachedData((draft) => {
              draft.push(data)
            });
          }
          
          socket.on('connect', () => {
            console.debug(socket.id);
            socket.emit(ChatEvent.RequestAllMessages);
          });

          socket.on('disconnect', () => {
            console.debug("Socket connection closed!");
          });

          /// Socket emitted message
          socket.on(ChatEvent.ReceiveMessage, (message: string) => {
            updateCachedData((draft) => {
              draft.push({ 
                messageType: messageTypes.bot,
                messageText: message,
                messageTime: (new Date()).toString()
              });
            });
          });

          socket.on(ChatEvent.SendAllMessages, (messages: Message[]) => {
            updateCachedData((draft) => {
              draft.splice(0, draft.length, ...messages);
            });
          });

          } catch {

          }

          await cacheEntryRemoved;
          socket.off('connect');
          socket.off(ChatEvent.SendAllMessages);
          socket.off(ChatEvent.ReceiveMessage);
      },
    })
  })
});

export const { useGetMessagesQuery } = auxiliumBackendApi;

