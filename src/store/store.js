import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
const reducer = {
  counterStore: counterReducer,
};

const store = configureStore({
  reducer,
});

export default store;
