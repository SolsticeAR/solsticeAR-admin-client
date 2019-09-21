import { call, put } from "redux-saga/effects";
import { signUp } from "../utils";
import { loginAdmin, fetchCampaignData } from "../actions";

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
      yield put(loginAdmin(data.email, data.password));
      /* Users need empty campaigns */
      const newEmptyCampaign = yield call(fetchCampaignData, newUser.userId); 
      if(!newEmptyCampaign.ok) { throw Error("Error registering new campaign");}
    } else {
      throw Error(newUser);
    }
  } catch (e) {
    window.alert(e.message);
  }
}
