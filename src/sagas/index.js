import { takeEvery, fork } from "redux-saga/effects";
import { loginSaga } from "./LoginSaga";
import { campaignSaga, setActiveMediaSaga } from "./CampaignSaga";
import { watchAndLog } from "./LogSaga";
import {
  LOGIN_ADMIN,
  FETCH_CAMPAIGN_DATA,
  TRY_SET_ACTIVE_MEDIA
} from "../actions/constants";

export default function* rootSaga() {
  yield takeEvery(LOGIN_ADMIN, loginSaga);
  yield takeEvery(FETCH_CAMPAIGN_DATA, campaignSaga);
  yield takeEvery(TRY_SET_ACTIVE_MEDIA, setActiveMediaSaga);
  yield fork(watchAndLog);
}
