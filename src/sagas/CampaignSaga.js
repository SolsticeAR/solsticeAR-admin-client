import { call, put } from "redux-saga/effects";
import { listCampaigns, setActive } from "../utils";
import { setCampaignData, setActiveMedia } from "../actions/index";

export function* campaignSaga({ type, data }) {
  try {
    const campaignApiResponse = yield call(listCampaigns, data.adminId);
    //2) Dispatch setAdminData
    yield put(setCampaignData(campaignApiResponse));
  } catch (e) {
    window.alert(e.message);
    //TODO : Handle campaign data  fetch error gracefully - yield put((e));
  }
}

export function* setActiveMediaSaga({ type, data }) {
  try {
    const campaignApiResponse = yield call(
      setActive,
      data.campaignId,
      data.mediaId
    );
    if (campaignApiResponse.ok) {
      yield put(setActiveMedia(data.mediaId));
    } else {
      throw new Error(campaignApiResponse.error);
    }
  } catch (e) {
    window.alert(e.message);
  }
}
