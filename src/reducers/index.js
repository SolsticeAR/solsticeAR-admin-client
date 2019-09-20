import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  LOG_OUT,
  SET_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA,
  SET_ACTIVE_MEDIA_URL,
  SET_ACTIVE_MEDIA_OBJ,
  SET_NEW_MEDIA
} from "../actions/constants";

const initialState = {
  adminData: null,
  activeMediaId: null,
  activeMediaUrl: "",
  activeMediaObj: null,
  campaigns: []
};

function reducer(state = initialState, { type, data }) {
  switch (type) {
    case LOGIN_ADMIN:
      return {
        ...state
      };
    case SET_ADMIN_DATA:
      return {
        ...state,
        adminData: { name: data.name, id: data.id, email: data.email }
      };
    case LOGIN_FAILED:
      return {
        ...state
      };
    case LOG_OUT:
      const { routing } = state;
      state = { routing }; 
      return createRootReducer(state, {type,data});
    case SET_CAMPAIGN_DATA:
      return {
        ...state,
        activeMediaId: data.campaigns[0].activeMediaId,
        campaigns: [...data.campaigns]
      };
    case SET_ACTIVE_MEDIA:
      {  
        return {
        ...state,
        activeMediaId: data.activeMediaId
      };
    }
    case SET_ACTIVE_MEDIA_URL:
      return {
        ...state,
        activeMediaUrl: data.activeMediaUrl
      };
    case SET_ACTIVE_MEDIA_OBJ:
      return {
        ...state,
        activeMediaObj: { ...data }
      };
    case SET_NEW_MEDIA:
      {
        const newCampaigns = [...state.campaigns];
        newCampaigns[0].media = newCampaigns[0].media.concat(data.media);
        return {
          ...state,
          campaigns:newCampaigns
        }
      }
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
