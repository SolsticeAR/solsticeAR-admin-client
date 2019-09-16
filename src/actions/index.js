import {
  LOGIN_ADMIN,
  SET_ADMIN_DATA,
  LOGIN_FAILED,
  SET_CAMPAIGN_DATA,
  FETCH_CAMPAIGN_DATA
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
