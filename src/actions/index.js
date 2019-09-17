import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  SET_CAMPAIGN_DATA,
  FETCH_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA,
  TRY_SET_ACTIVE_MEDIA,
  SET_ACTIVE_MEDIA_URL,
  CREATE_NEW_MEDIA,
  CREATE_NEW_USER
} from "./constants";

export const loginAdmin = (email, password) => {
  return {
    type: LOGIN_ADMIN,
    data: { email, password }
  };
};

export const setAdminData = ({ name, id, email }) => {
  return {
    type: SET_ADMIN_DATA,
    data: { name, id, email }
  };
};

export const loginFailed = error => {
  return {
    type: LOGIN_FAILED,
    data: { message: error.message }
  };
};

export const setCampaignData = ({ campaigns }) => {
  return {
    type: SET_CAMPAIGN_DATA,
    data: { campaigns }
  };
};

export const fetchCampaignData = adminId => {
  return {
    type: FETCH_CAMPAIGN_DATA,
    data: { adminId }
  };
};

export const setActiveMedia = activeMediaId => {
  return {
    type: SET_ACTIVE_MEDIA,
    data: { activeMediaId }
  };
};

export const setActiveMediaUrl = activeMediaUrl => {
  return {
    type: SET_ACTIVE_MEDIA_URL,
    data: { activeMediaUrl }
  };
};

export const trySetActiveMedia = (campaignId, mediaId) => {
  return {
    type: TRY_SET_ACTIVE_MEDIA,
    data: { campaignId, mediaId }
  };
};

export const createNewMedia = mediaData => {
  return {
    type: CREATE_NEW_MEDIA,
    data: { ...mediaData }
  };
};

export const createNewUser = userData => {
  return {
    type: CREATE_NEW_USER,
    data: { ...userData }
  };
};
