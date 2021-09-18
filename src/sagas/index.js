import { all, fork } from "@redux-saga/core/effects";

import * as counterSaga from "./counterSaga/counterSaga";

function* rootSaga() {
  yield all(
    [...Object.values(counterSaga), ...Object.values(todoSaga)].map(fork)
  );
}

export default rootSaga;
