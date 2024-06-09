import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./slice/popupSlice";

const store = configureStore({
  reducer: { popup: popupReducer },
  devTools: process.env.REACT_APP_NODE_ENV !== "production",
});

export default store;
