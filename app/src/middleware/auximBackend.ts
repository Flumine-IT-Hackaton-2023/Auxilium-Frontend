/// Connection to original backend service which provides all bots and 
///   connections.
///
/// @author AssertionBit
/// @license MIT



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {User} from "../slice";
import {authRequest, registerRequest} from "../slice/userSlice";

export const auxiliumBackendApiSlice = createApi({
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
    })
  })
});

export const { useAuthQuery } = auxiliumBackendApiSlice;

