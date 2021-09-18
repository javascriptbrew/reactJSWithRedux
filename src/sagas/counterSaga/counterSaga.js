import { takeLatest, takeEvery, delay, put, call } from "redux-saga/effects";
import { decrement, increment } from "../../reducers/counterReducer";
import sagaActions from "./sagaActions";

function* doApiCallIncrement({ payload }) {
  try {
    // yield delay(2000);
    yield put(increment(payload));
  } catch (error) {}
}

function* doApiCallDecrement({ payload }) {
  try {
    yield delay(2000);
    yield put(decrement(payload));
  } catch (error) {}
}

export function* sagaIncrement() {
  yield takeLatest(sagaActions.DO_INCREMENT, doApiCallIncrement);
}
export function* sagaDecrement() {
  yield takeLatest(sagaActions.DO_DECREMENT, doApiCallDecrement);
}
