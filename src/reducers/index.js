import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  SET_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA
} from "../actions/constants";

const initialState = {
  isLogingIn: false,
  adminData: null,
  verifiedUser: false,
  currentCampaignId: null,
  activeMediaId: null,
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
        campaigns: { ...data.campaigns }
      };
    case SET_ACTIVE_MEDIA:
      return {
        ...state,
        campaigns: { ...state.campaigns, activeMediaId: data.activeMediaId }
      };
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
