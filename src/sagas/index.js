import { takeEvery, fork } from "redux-saga/effects";
import { loginSaga } from "./LoginSaga";
import { campaignSaga, setActiveMediaSaga } from "./CampaignSaga";
import { addMediaSaga } from "./MediaSaga";
import { addUserSaga } from "./UserSaga";
import { watchAndLog } from "./LogSaga";
import {
  LOGIN_ADMIN,
  FETCH_CAMPAIGN_DATA,
  TRY_SET_ACTIVE_MEDIA,
  CREATE_NEW_MEDIA,
  CREATE_NEW_USER
} from "../actions/constants";

export default function* rootSaga() {
  yield takeEvery(LOGIN_ADMIN, loginSaga);
  yield takeEvery(FETCH_CAMPAIGN_DATA, campaignSaga);
  yield takeEvery(TRY_SET_ACTIVE_MEDIA, setActiveMediaSaga);
  yield takeEvery(CREATE_NEW_MEDIA, addMediaSaga);
  yield takeEvery(CREATE_NEW_USER, addUserSaga);
  yield fork(watchAndLog);
}
