import { RECEIVE_SEARCH_ERRORS, RECEIVE_ONLY_USERS } from '../actions/user_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVE_ONLY_USERS:
      return [];
    default:
      return state;
  }
};
