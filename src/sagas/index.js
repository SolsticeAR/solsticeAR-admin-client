import { takeEvery, fork } from "redux-saga/effects";
import { loginSaga } from "./LoginSaga";
import { campaignSaga } from "./CampaignSaga";
import { watchAndLog } from "./LogSaga";
import { LOGIN_ADMIN, FETCH_CAMPAIGN_DATA } from "../actions/constants";

export default function* rootSaga() {
  yield takeEvery(LOGIN_ADMIN, loginSaga);
  yield takeEvery(FETCH_CAMPAIGN_DATA, campaignSaga);
  yield fork(watchAndLog);
}
