import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "../feature/photos-slice";

export const store = configureStore({
  reducer: {
    [photoSlice.reducerPath]: photoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(photoSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
