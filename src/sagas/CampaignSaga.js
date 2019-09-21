import { call, put } from "redux-saga/effects";
import { listCampaigns, setActive, createNewCampaign } from "../utils";
import {
  setCampaignData,
  setActiveMedia,
  setActiveMediaUrl,
  setActiveMediaObj
} from "../actions/index";

export function* campaignSaga({ type, data }) {
  try {
    let campaignApiResponse = yield call(listCampaigns, data.adminId);
    
    if (!campaignApiResponse.campaigns.length) {
      
      const createCampaignApiResponse = yield call(createNewCampaign, data.adminId, "Campaign 1");
      if (!createCampaignApiResponse.ok) {
        throw new Error(createCampaignApiResponse.error);
      } else {
        campaignApiResponse = createCampaignApiResponse;
      }

    }
    debugger;
    console.log("Campaign API response:" ,campaignApiResponse);
    yield put(setCampaignData(campaignApiResponse));
    if (!campaignApiResponse.campaigns.media) return;
    const activeMediaId = campaignApiResponse.campaigns[0].activeMediaId;
    const activeMedia = campaignApiResponse.campaigns[0].media.find(
      media => media.id === activeMediaId
    );
    const activeCreativeUrl = activeMedia.url;
    yield put(setActiveMediaUrl(activeCreativeUrl));
    yield put(setActiveMediaObj(activeMedia));
  } catch (e) {
    window.alert("Error in Campaign retrieval" + e.message);
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
