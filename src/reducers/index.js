import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  SET_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA,
  SET_ACTIVE_MEDIA_URL,
  SET_NEW_MEDIA
} from "../actions/constants";

const initialState = {
  adminData: null,
  activeMediaId: null,
  activeMediaUrl: "",
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
    case SET_CAMPAIGN_DATA:
      return {
        ...state,
        activeMediaId: data.campaigns[0].activeMediaId,
        campaigns: data.campaigns.slice(0)
      };
    case SET_ACTIVE_MEDIA:
      { const newCampaigns = state.campaigns.slice(0); 
        newCampaigns[0].activeMediaId = data.activeMediaId;
         return {
        ...state,
        campaigns: newCampaigns,
        activeMediaId: data.activeMediaId
      };
    }

    case SET_ACTIVE_MEDIA_URL:
      return {
        ...state,
        activeMediaUrl: data.activeMediaUrl
      };
    case SET_NEW_MEDIA:
      const newCampaigns = state.campaigns.map((campaign, index) => {
            if (index === 0) {
              campaign.media = campaign.media.concat(data.media);
            }
            return campaign;
      });
      return {
          ...state,
          campaigns: newCampaigns
          
      }
      
        
      // const newMedia = { ...data };
      // const newState = { ...state };
      // newState.campaigns[0].media.push(newMedia);
      // return newState;

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
