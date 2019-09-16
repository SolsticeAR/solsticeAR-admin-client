import { takeEvery, fork } from "redux-saga/effects";
import { loginSaga } from "./LoginSaga";
import { watchAndLog } from "./LogSaga";
import { LOGIN_ADMIN } from "../actions/constants";

export default function* rootSaga() {
  yield takeEvery(LOGIN_ADMIN, loginSaga);
  yield fork(watchAndLog);
}
