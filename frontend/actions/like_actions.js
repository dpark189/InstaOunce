import * as LikeApiUtil from '../util/like_api_util';
import { receiveComment } from './comment_actions';
import { receivePost } from './post_actions';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const receiveLike = (payload) => {
  return {
    type: RECEIVE_LIKE,
    post: payload.post || {},
    comment: payload.comment || {}
  };
};

export const removeLike = (payload) => {
  return {
    type: REMOVE_LIKE,
    post: payload.post || {},
    comment: payload.comment || {}
  };
};

export const receiveLikeErrors = (errors) => {
  return {
    type: RECEIVE_LIKE_ERRORS,
    errors
  };
};

export const createLike = (likedType, likedId, currentUserId) => {
  return dispatch => {
    return LikeApiUtil.createLike(likedType, likedId, currentUserId).then(
      (payload) =>  dispatch(receiveLike(payload))
    );
  };
};

export const deleteLike = (likedType, likeId) => {
  return dispatch => {
    return LikeApiUtil.deleteLike(likeId).then(
      (payload) => dispatch(removeLike(payload))
    );
  };
};
