import { takeEvery, select } from "redux-saga/effects";

export function* watchAndLog() {
  yield takeEvery("*", function* logger(action) {
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  });
}
