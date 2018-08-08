import * as UserApiUtil from '../util/user_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_ONLY_USERS = 'RECEIVE_ONLY_USERS';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT';

export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    posts: payload.posts || {}
  };
};

export const receiveUsers = (payload) => {
  return {
    type: RECEIVE_USERS,
    users: payload.users,
    posts: payload.posts || {}
  };
};

export const receiveAllUsers = (payload) => {
  return {
    type: RECEIVE_ALL_USERS,
    users: payload.users,
    posts: payload.posts || {}
  };
};

export const receiveOnlyUsers = (users) => {
  return {
    type: RECEIVE_ONLY_USERS,
    users
  };
};

export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH_RESULT
  };
};

export const updateUser = (userId, formData) => {
  return dispatch => {
    return UserApiUtil.updateUser(userId, formData).then(
      (payload) => dispatch(receiveUser(payload)),
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

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then(
      (payload) => dispatch(receiveUsers(payload))
    );
  };
};

export const fetchStories = (userId) => {
  return dispatch => {
    return UserApiUtil.fetchStories(userId).then(
      (payload) => dispatch(receiveUsers(payload))
    );
  };
};

export const searchUsers = (query) => {
  return dispatch => {
    return UserApiUtil.searchUsers(query).then(
      (users) => dispatch(receiveOnlyUsers(users)),
      (errors) => dispatch(receiveSearchErrors(errors))
    );
  };
};

export const receiveSearchErrors = (errors) => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors
  };
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
