import { call, put } from "redux-saga/effects";
import { addMedia } from "../utils";
import { createNewMedia } from "../actions/index";

export function* addMediaSaga({ type, data }) {
  try {
    console.log("data:", data);
    const newMedia = yield call(
      addMedia,
      data.name,
      data.url,
      data.type,
      data.campaignId
    );

    console.log("NEW MEDIA BEING DISPATCHED", newMedia);
    yield put(createNewMedia(newMedia));
  } catch (e) {
    //TODO: Find out how to make the upload widget not try to upload twice...
    console.log("There was an error while trying to upload the new media.");
  }
}
