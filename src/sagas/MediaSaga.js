import { call, put } from "redux-saga/effects";
import { addMedia } from "../utils";
import { setNewMedia } from "../actions";

export function* addMediaSaga({ type, data }) {
  try {
    const newMedia = (yield call(
      addMedia,
      data.name,
      data.url,
      data.type,
      data.campaignId
    )).media;

    yield put(setNewMedia(newMedia));
  } catch (e) {
    //TODO: Find out how to make the upload widget not try to upload twice...
    console.log("There was an error while trying to upload the new media.");
  }
}
