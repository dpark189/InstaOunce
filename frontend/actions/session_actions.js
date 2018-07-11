import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveSessionErrors = (errors) => {

  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const login = (user) => {
  return dispatch => {
    return SessionApiUtil.login(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (errors) => {return dispatch(receiveSessionErrors(errors));}
    );
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));
  };
};

export const signup = (user) => {

  return dispatch => {
    return SessionApiUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => {
        
        return dispatch(receiveSessionErrors(errors.responseJSON));
      }
    );
  };
};
