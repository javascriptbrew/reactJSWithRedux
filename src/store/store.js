import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
import formReducer from "../reducers/formReducer";

const reducer = {
  counterStore: counterReducer,
  formData: formReducer,
};

const store = configureStore({
  reducer,
});

export default store;
