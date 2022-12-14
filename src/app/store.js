import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../slice/filterSlice";

const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});

export default store;
