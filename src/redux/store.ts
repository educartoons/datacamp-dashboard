import { configureStore } from "@reduxjs/toolkit";
import userRuducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userRuducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
