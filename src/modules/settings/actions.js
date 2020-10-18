import { User, Cloud } from "parse";
import { getCurrentInitializeIdCampaign } from "../../utils/storage";

// Constants
export const FETCH_USERPROFILE_REQUEST = "FETCH_USERPROFILE_REQUEST";
export const FETCH_USERPROFILE_SUCCESS = "FETCH_USERPROFILE_SUCCESS";
export const FETCH_USERPROFILE_FAILURE = "FETCH_USERPROFILE_FAILURE";
export const RECEIVE_USER_LOG_IN = "RECEIVE_USER_LOG_IN";

const fetchUserProfileRequest = () => {
  return { type: FETCH_USERPROFILE_REQUEST };
};

const fetchUserProfileSuccess = payload => {
  return { type: FETCH_USERPROFILE_SUCCESS, payload: payload };
};

const fetchUserProfileFailure = error => {
  return { type: FETCH_USERPROFILE_FAILURE, error: error };
};

export const receiveUserLogIn = (parseUser = {}) => {
;
  return { type: RECEIVE_USER_LOG_IN, parseUser };
};

export const loadUserProfile = profileId => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());
    Cloud.run("loadUserProfile", { profileId })
      .then(profile => dispatch(fetchUserProfileSuccess(profile)))
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const registerUserProfile = (
  email,
  name,
  profileId,
  providerName,
  authData,
  history
) => {
  return dispatch => {
    const user = new User();
    dispatch(fetchUserProfileRequest());
    user
      .linkWith(providerName, { authData: authData })
      .then(userR => {
        let userJSON = userR.toJSON();
        let templateId = getCurrentInitializeIdCampaign();
        
        Cloud.run("registerUserProfile", {
          username: userJSON.username,
          templateId,
          providerName,
          email,
          cardUrl:window.location.origin
        })
          .then(user => {
            let userSavedAsJSON = user.toJSON();
            Cloud.run("linkCardToUserProfile", {
              email: email,
              templateId
            })
              .then(() => {
                if (userSavedAsJSON.type !== "profile") {
                  User.logOut();
                  dispatch(fetchUserProfileFailure({}));
                  // history.push("/home/params");
                  return;
                } else {
                ;
                  dispatch(receiveUserLogIn(userSavedAsJSON));
                  history.push("/home");
                }
              })
              .catch(err => {
                // User.logOut();
                //dispatch(fetchUserProfileFailure(err));
                // history.push("/home/params");
              });
          })
          .catch(err => dispatch(fetchUserProfileFailure(err)));
      })
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const registerUser = (email, password, cardId, history) => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());

    User.signUp(email, password, { email, type: "profile" })
      .then(userR => {
        let userJSON = userR.toJSON();
        let templateId = getCurrentInitializeIdCampaign();
        Cloud.run("registerUserProfile", {
          templateId,
          username: userJSON.username,
          email,
          cardUrl:window.location.origin
        }).then(user => {
          let userSavedAsJSON = user.toJSON();
          Cloud.run("linkCardToUserProfile", {
            email: email,
            templateId
          })
            .then(() => {
              if (userSavedAsJSON.type !== "profile") {
                User.logOut();
                dispatch(fetchUserProfileFailure({}));
                // history.push("/home/params");
                return;
              } else {
                dispatch(receiveUserLogIn(userSavedAsJSON));
                history.push("/home");
              }
            })
            .catch(err => {
              // User.logOut();
              //dispatch(fetchUserProfileFailure(err));
              // history.push("/home/params");
            });
        });
      })
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const logIn = (email, password, cardId, history) => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());
      User.logIn(email, password)
          .then(user => {
              let userJSON = user.toJSON();
              if (userJSON.type !== "profile") {
                  User.logOut();
                  fetchUserProfileFailure({});
                  return;
              }
              dispatch(receiveUserLogIn(userJSON));
          })
          .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const displayError = err => {
  return dispatch => {
    dispatch(fetchUserProfileFailure(err));
  };
};

export const linkCardToUserProfile = (user, history, templateId) => {
  return dispatch => {
    let userSavedAsJSON = user.toJSON();

    return Cloud.run("linkCardToUserProfile", {
      email: userSavedAsJSON.email,
      templateId
    }).then(() => {
        dispatch(receiveUserLogIn(userSavedAsJSON));
        history.push("/home");
    }).catch(err => {
      // User.logOut();
      //dispatch(fetchUserProfileFailure(err));
      // history.push("/home/params");
    });;
  };
};