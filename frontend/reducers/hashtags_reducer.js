import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/hashtag_actions';
import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TAGS:
    case RECEIVE_POST:
    case RECEIVE_POSTS:

      return merge(newState, action.hashtags);
    case RECEIVE_TAG:
      return merge(newState, {[action.hashtag.id]: action.hashtag});
    default:
      return state;
  }
};
