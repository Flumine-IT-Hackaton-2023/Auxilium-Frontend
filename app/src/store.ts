/// Application store
/// Mostly centralization of all items in one place: slices, middlewares and
///   dirreved stores.
///
/// @author AssertionBit
/// @license MIT

import { configureStore } from '@reduxjs/toolkit';
import { auxiliumBackendApiSlice } from './middleware';
import { messagesSliceReducer, sessionSliceReducer, userSliceReducer } from './slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    [auxiliumBackendApiSlice.reducerPath] : auxiliumBackendApiSlice.reducer,
    user : userSliceReducer,
    sessions : sessionSliceReducer,
    messages : messagesSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(auxiliumBackendApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;

