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
        debugger
        return dispatch(receiveUserErrors(err))
      }
    )
  };
};

export const receiveUserErrors = (errors) => {
  debugger
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
