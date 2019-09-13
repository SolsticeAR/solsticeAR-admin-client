// import { saveObject } from "../utils";

const axios = require("axios");

// TODO: put this in an environment config file
const uri = "http://localhost:4000/api";

let sendGqlRequest = function(query, includeAuthToken) {
  // PASS IN QUERY AND WHETHER OR NOT IT NEEDS AUTH TOKEN
  let headers = {
    "Content-Type": "application/json"
  };
  if (includeAuthToken) {
    let authData = window.localStorage.getItem("authData");
    authData = JSON.parse(authData);
    headers["Authorization"] = "Bearer " + authData.token;
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

export function addMedia(adminId, campaignId, photoName, referenceKey) {
  // POSTS NEW IMAGES/MEDIA TO DB
  return sendGqlRequest(
    `mutation { 
    addMedia(media: { 
      name: "${photoName}" 
      url: "${referenceKey}"
      type: "image"
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
      media: response.media
    };
  });
}

export function setActive(adminId, campaignId, mediaId) {
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
          views{
            date
            views
          } 
        }
      }
    }`).then(response => {
    console.log(response);
    return {
      ok: true,
      campaigns: response.data.getAdminCampaigns.map(c => {
        return {
          id: c.id,
          name: c.name,
          activeCreativeId: c.activeCreativeId || 0,
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

// POSTS S3 DATA URIS TO DB

// export function saveFile(adminId, campaignId, file) {
//   return saveObject(file).then(response => {
//     if (!response.ok) return response;

//     return serverImpl.addMediaToCampaign(
//       adminId,
//       campaignId,
//       response.name,
//       response.referenceKey
//     );
//   });
// }

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

export function testMessage(campaignId) {
  return sendGqlRequest(
    `
      mutation {
        test(campaignID: ${campaignId})
      }
    `,
    true
  ).then(response => {
    console.log(response);
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
    false
  ).then(response => {
    if (!response.ok) return response;
    let loginInfo = response.data.login;
    return {
      ok: true,
      token: loginInfo.token,
      name: loginInfo.admin.name,
      id: loginInfo.admin.id,
      email: loginInfo.admin.email
    };
  });
}

//THIS FUNCTION/SIMILAR SHOULD GO IN THE LOGIN COMPONENT,
// "setAdminName" was calling ^^^^ to query for login
// and assigned the response to object "AuthData"
// put in localStorage
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// handleSubmit() {
//   let email = this.state.loginEmail;
//   let password = this.state.loginPassword;
//   login(email, password).then(response => {
//     if (response.ok) {
//       this.props.setAdminName(response);
//       let authData = {
//         token: response.token,
//         name: response.name,
//         email: response.email,
//         id: response.id,
//       };
//       window.localStorage.setItem("authData", JSON.stringify(authData));
//       this.setState({ redirect: true });
//     } else {
//       window.alert(response.error);
//     }
//   });
// }

export function logout() {
  // REVOKES AUTH TOKEN
  return timedPromise(100).then(response => {
    if (window.localStorage.getItem("authData")) {
      window.localStorage.removeItem("authData");
    }
  });
}
