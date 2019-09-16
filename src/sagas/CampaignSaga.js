import { call, put } from "redux-saga/effects";
import { listCampaigns } from "../utils";
import { setCampaignData } from "../actions/index";

export function* campaignSaga({ type, data }) {
  try {
    const campaignApiResponse = yield call(listCampaigns, data.adminId);
    console.log(campaignApiResponse);
    //2) Dispatch setAdminData
    yield put(setCampaignData(campaignApiResponse));
  } catch (e) {
    window.alert(e.message);
    //TODO : Handle campaign data  fetch error gracefully - yield put((e));
  }
}
