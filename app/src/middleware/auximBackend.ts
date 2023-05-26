/// Connection to original backend service which provides all bots and 
///   connections.
///
/// @author AssertionBit
/// @license MIT



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const auxiliumBackendApiSlice = createApi({
  reducerPath: 'auxiliumBackendApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9090/api/v1' }),
  endpoints: builder => ({
    getBots: builder.query({
      query: () => '/bots'
    })
  })
});

export const { useGetBotsQuery } = auxiliumBackendApiSlice;

