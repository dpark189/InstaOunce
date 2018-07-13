import * as UserApiUtil from '../util/user_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (payload) => {

  return {
    type: RECEIVE_USER,
    user: payload.user,
    post: payload.post
  };
};

export const receiveUsers = (payload) => {
  return {
    type: RECEIVE_USERS,
    user: payload.user,
    posts: payload.posts
  };
};

export const updateUser = (user) => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(
      (user) => dispatch(receiveUser(user)),
      (err) => {
        return dispatch(receiveUserErrors(err));
      }
    );
  };
};

export const fetchUser = (userId) => {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(
      (payload) => dispatch(receiveUser(payload))
    );
  };
};

export const receiveUserErrors = (errors) => {

  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
