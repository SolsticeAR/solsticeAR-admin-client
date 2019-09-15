import { call, put } from "redux-saga/effects";
import { login, storeTokenInLS } from "../utils";
import { setAdminData, loginFailed } from "../actions/index";
import { push } from "connected-react-router";

export function* loginSaga({ type, data }) {
  try {
    const loginApiResponse = yield call(login, data.email, data.password);
    //1) store login info in local storage
    storeTokenInLS(loginApiResponse);
    //2) Dispatch setAdminData
    yield put(setAdminData(loginApiResponse));
    //3) Route user to Dashboard
    yield put(push("/dashboard"));
  } catch (e) {
    window.alert(e.message);
    yield put(loginFailed(e));
  }
}
