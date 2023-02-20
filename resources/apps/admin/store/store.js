import { configureStore } from '@reduxjs/toolkit';
import {breadcrumbsSlice} from './breadcrumbs/breadcrumbsSlice'
import {authSlice} from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    breadcrumbs: breadcrumbsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
