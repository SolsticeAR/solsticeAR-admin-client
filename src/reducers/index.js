import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  SET_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA,
  SET_ACTIVE_MEDIA_URL,
  CREATE_NEW_MEDIA
} from "../actions/constants";

const initialState = {
  isLoggingIn: false,
  adminData: null,
  verifiedUser: false,
  currentCampaignId: null,
  activeMediaId: null,
  activeMediaUrl: "",
  newCampaignForm: false,
  campaigns: []
};

function reducer(state = initialState, { type, data }) {
  switch (type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        isLoggingIn: true
      };
    case SET_ADMIN_DATA:
      return {
        ...state,
        verifiedUser: true,
        adminData: { name: data.name, id: data.id, email: data.email }
      };
    case LOGIN_FAILED:
      return {
        ...state,
        verifiedUser: false
      };
    case SET_CAMPAIGN_DATA:
      return {
        ...state,
        activeMediaId: data.campaigns[0].activeMediaId,
        campaigns: { ...data.campaigns }
      };
    case SET_ACTIVE_MEDIA:
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          activeMediaId: data.activeMediaId
        },
        activeMediaId: data.activeMediaId
      };
    case SET_ACTIVE_MEDIA_URL:
      return {
        ...state,
        activeMediaUrl: data.activeMediaUrl
      };
    case CREATE_NEW_MEDIA:
      const newMedia = { ...data };
      const newState = { ...state };
      newState.campaigns[0].media.push(newMedia);
      return newState;

    default:
      return state;
  }
}

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    reducer
  });
};

export default createRootReducer;
