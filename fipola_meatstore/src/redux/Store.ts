import { configureStore } from "@reduxjs/toolkit";
import mainState from "./Reducer";
const store = configureStore({
  reducer: { state: mainState },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
