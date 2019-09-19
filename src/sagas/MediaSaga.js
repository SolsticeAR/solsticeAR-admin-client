import { call, put } from "redux-saga/effects";
import { addMedia } from "../utils";
import { setNewMedia } from "../actions/index";


export function* addMediaSaga({ type, data }) {
  try {
    const newMedia = (yield call(
      addMedia,
      data.name,
      data.url,
      data.type,
      data.campaignId
    )); // Add views empty array so media can be checke
    yield put(setNewMedia(newMedia));
  } catch (e) {
    //TODO: Find out how to make the upload widget not try to upload twice...
    console.log("There was an error while trying to upload the new media.");
  }
}
