import * as UserApiUtil from '../util/user_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const updateUser = (user) => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(
      (user) => dispatch(receiveUser(user)),
      (err) => {

        return dispatch(receiveUserErrors(err))
      }
    )
  };
};

export const fetchUser = (userId) => new Promise(function(resolve, reject) {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(
      (user) => dispatch(receiveUser(user))
    )
  };
});

export const receiveUserErrors = (errors) => {

  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
