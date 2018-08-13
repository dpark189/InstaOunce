import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_POST_FROM_COMMENT } from '../actions/comment_actions';
import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions'
import { merge } from 'lodash';

const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_POST:
      return merge(newState, action.comments);
    case RECEIVE_COMMENT:
      return merge(newState, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return newState;

  }
};
