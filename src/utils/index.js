const axios = require("axios");

// TODO: put this in an environment config file
const uri = "http://localhost:4000/api";

function timedPromise(ms, value) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

export function getAuthTokenFromLS() {
  const authData = window.localStorage.getItem("authData");
  return authData ? JSON.parse(authData) : null;
}

export function storeTokenInLS(loginData) {
  if (!loginData.token) throw Error("No token suplied. storeTokenInLS");
  else {
    let authData = {
      token: loginData.token,
      name: loginData.name,
      email: loginData.email,
      id: loginData.id
    };
    window.localStorage.setItem("authData", JSON.stringify(authData));
  }
}

const sendGqlRequest = function(query, includeAuthToken) {
  // PASS IN QUERY AND WHETHER OR NOT IT NEEDS AUTH TOKEN
  const headers = {
    "Content-Type": "application/json"
  };
  if (includeAuthToken) {
    let authData = window.localStorage.getItem("authData");
    authData = JSON.parse(authData);
    headers.Authorization = "Bearer " + authData.token;
  }
  return axios.post(uri, { query }, { headers }).then(response => {
    if (response.data.errors) {
      return { ok: false, error: response.data.errors[0].message };
    }
    return {
      ok: true,
      data: response.data.data
    };
  });
};

export function addMedia(name, url, type, campaignId) {
  // POSTS NEW IMAGES/MEDIA TO DB
  return sendGqlRequest(
    `mutation { 
    addMedia(media: { 
      name: "${name}" 
      url: "${url}"
      type: "${type}"
      campaignID: ${campaignId}
    } ){ 
    id
    type
    name
    url
    }
  }`,
    true
  ).then(response => {
    if (!response.ok) return response;
    return {
      ok: true,
      media: response.data.addMedia
    };
  });
}

export function setActive(campaignId, mediaId) {
  // POSTS TO DB THE ACTIVE EXPERIENCE FOR THE CAMPAIGN
  return sendGqlRequest(
    `mutation { 
    setActiveMedia(campaignID: ${campaignId} mediaID: ${mediaId}  )
  }`,
    true
  ).then(response => {
    if (!response.ok) return response;
    return {
      ok: true,
      activeId: mediaId
    };
  });
}

export function listCampaigns(adminId) {
  // GETS ALL CAMPAIGNS
  return sendGqlRequest(`{
      getAdminCampaigns(adminID: ${adminId}) {
        name 
        id 
        activeCreativeId
        media {
          id
          name
          url
          type
          
          views{
            date
            views
          } 
        }
      }
    }`).then(response => {
    return {
      ok: true,
      campaigns: response.data.getAdminCampaigns.map(c => {
        return {
          id: c.id,
          name: c.name,
          activeMediaId: c.activeCreativeId || 0,
          media: (c.media || []).map(m => {
            return {
              id: m.id,
              type: m.type,
              name: m.name,
              url: m.url,
              views: (m.views || []).map(v => {
                return {
                  date: v.date,
                  views: v.views
                };
              })
            };
          })
        };
      })
    };
  });
}

export function createNewCampaign(adminId, name) {
  // CREATES A NEW CAMPAIGN
  return sendGqlRequest(
    `mutation { 
    addCampaign(campaign: { 
      name: "${name}"
      adminID: ${adminId}
    } ){ 
    id
    name
    active
    activeCreativeId
    media {
      id
      url
    }
    }
  }`,
    true
  ).then(response => {
    if (!response.ok) return response;
    return {
      ok: true,
      name: response.response.data.addCampaign.name,
      id: response.response.data.addCampaign.id
    };
  });
}

export function signUp(name, email, password, industry) {
  // CREATES NEW USER
  return sendGqlRequest(
    `mutation {
    register(adminData: {
     name: "${name}"
     email: "${email}"
     industry: "${industry}"
     password: "${password}"
    } ){
      id
    }
  }`,
    false
  ).then(response => {
    if (!response.ok) return response;
    return {
      ok: true,
      userId: response.data.register.id
    };
  });
}

export function login(email, password) {
  const includeAuthToken = false;
  // VERIFIES USER
  return sendGqlRequest(
    `
    mutation {
      login(email:"${email}", password:"${password}"){
        token
        admin {
          id
          name
          email
        }
      }
    }`,
    includeAuthToken
  ).then(response => {
    console.log("SERVER RESPONSE (LOGIN)", response);
    if (!response.ok) throw Error("Login failed.", response.error);

    let loginInfo = response.data.login;
    return {
      token: loginInfo.token,
      name: loginInfo.admin.name,
      id: loginInfo.admin.id,
      email: loginInfo.admin.email
    };
  });
}

export function logout() {
  // REVOKES AUTH TOKEN
  return timedPromise(100).then(response => {
    if (window.localStorage.getItem("authData")) {
      window.localStorage.removeItem("authData");
    }
  });
}
