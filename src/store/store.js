import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
import formReducer from "../reducers/formReducer";
import todoSlice from "../reducers/todoSlice";
import rootSaga from "../sagas";

const reducer = {
  counterStore: counterReducer,
  formData: formReducer,
  todos: todoSlice,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
