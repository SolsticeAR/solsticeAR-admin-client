import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  LOG_OUT,
  SET_CAMPAIGN_DATA,
  FETCH_CAMPAIGN_DATA,
  SET_ACTIVE_MEDIA,
  TRY_SET_ACTIVE_MEDIA,
  SET_ACTIVE_MEDIA_URL,
  CREATE_NEW_MEDIA,
  CREATE_NEW_USER,
  SET_ACTIVE_MEDIA_OBJ,
  SET_NEW_MEDIA
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
export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

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
export const setNewMedia = mediaData => {
  return {
    type: SET_NEW_MEDIA,
    data: { ...mediaData }
  };
};

export const createNewUser = userData => {
  return {
    type: CREATE_NEW_USER,
    data: { ...userData }
  };
};

export const setActiveMediaObj = mediaObj => {
  return {
    type: SET_ACTIVE_MEDIA_OBJ,
    data: { ...mediaObj }
  };
};
