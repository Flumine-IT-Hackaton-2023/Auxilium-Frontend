/// Connection to original backend service which provides all bots and 
///   connections.
///
/// @author AssertionBit
/// @license MIT



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const auxiliumBackendApiSlice = createApi({
  reducerPath: 'auxiliumBackendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api'
  }),
  endpoints: builder => ({
    auth: builder.query({
      query: () => '/authenticate'
    })
  })
});

export const { useAuthQuery } = auxiliumBackendApiSlice;

