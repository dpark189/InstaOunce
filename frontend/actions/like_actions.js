import * as LikeApiUtil from '../util/like_api_util';
import { receiveComment } from './comment_actions';
import { receivePost } from './post_actions';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removeLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

export const createLike = (likedType, likedId, currentUserId) => {
  return LikeApiUtil.createLike(likedType, likedId, currentUserId).then(
    (response) => {
      debugger
      if (like.liked_item_type === "Post") {
        return dispatch(receivePost(response));
      } else if (like.liked_item_type === "Comment") {
        return dispatch(receiveComment(response));
      }
    }
  );
};

export const deleteLike = (likedType, likeId) => {
  return LikeApiUtil.deleteLike(likeId).then(
    (response) => {
      if (likedType === "Post") {
        return dispatch(receivePost(response));
      } else if (likedType === "Comment") {
        return dispatch(receiveComment(response));
      }
    }
  );
};
