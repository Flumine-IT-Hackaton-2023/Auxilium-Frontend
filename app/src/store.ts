/// Application store
/// Mostly centralization of all items in one place: slices, middlewares and
///   dirreved stores.
///
/// @author AssertionBit
/// @license MIT

import { configureStore } from '@reduxjs/toolkit';
import { auxiliumBackendApiSlice } from './middleware';
import { userSliceReducer } from './slice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    [auxiliumBackendApiSlice.reducerPath]: auxiliumBackendApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(auxiliumBackendApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

