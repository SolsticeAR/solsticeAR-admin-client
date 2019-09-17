import { call, put } from "redux-saga/effects";
import { signUp } from "../utils";
import { loginAdmin } from "../actions";

export function* addUserSaga({ type, data }) {
  try {
    const newUser = yield call(
      signUp,
      data.name,
      data.email,
      data.password,
      data.industry
    );
    if (newUser.ok) {
      console.log("NEW USER BEING LOGGED IN", data);
      yield put(loginAdmin(data.email, data.password));
    } else {
      throw Error(newUser);
    }
  } catch (e) {
    window.alert(e.message);
  }
}
