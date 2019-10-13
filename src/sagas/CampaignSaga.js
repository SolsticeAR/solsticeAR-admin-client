import { call, put } from "redux-saga/effects";
import { listCampaigns, setActive, createNewCampaign } from "../utils";
import {
  setCampaignData,
  setActiveMedia,
  setActiveMediaObj
} from "../actions/index";

export function* campaignSaga({ type, data }) {
  try {
    let campaignApiResponse = yield call(listCampaigns, data.adminId);

    if (!campaignApiResponse.campaigns.length) {

      const createCampaignApiResponse = yield call(createNewCampaign, data.adminId);
      if (!createCampaignApiResponse.ok) {
        throw new Error(createCampaignApiResponse.error);
      } else {
        campaignApiResponse = createCampaignApiResponse;
      }

    }
    yield put(setCampaignData(campaignApiResponse));
    if (!campaignApiResponse.campaigns[0].media.length) return;
    const activeMediaId = campaignApiResponse.campaigns[0].activeMediaId;
    const activeMedia = campaignApiResponse.campaigns[0].media.find(
      media => media.id === activeMediaId
    );
    yield put(setActiveMediaObj(activeMedia));
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
