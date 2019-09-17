import { call, put } from "redux-saga/effects";
import { signUp } from "../utils";
import { loginAdmin } from "../actions";

export function* addUserSaga({ type, data }) {
  try {
    console.log("User:", data);
    const newUser = yield call(
      signUp,
      data.name,
      data.email,
      data.password,
      data.industry
    );

    console.log("NEW USER BEING LOGGED IN", newUser);
    yield put(loginAdmin(newUser.userId, data.password));
  } catch (e) {
    window.alert(e.message);
  }
}
