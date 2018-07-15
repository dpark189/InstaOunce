import * as CommentApiUtil from '../util/comment_api_util.js';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_POST_FROM_COMMENT = "RECEIVE_POST_FROM_COMMENT";

export const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: payload.comments,
    users: payload.users
  };
};

export const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT,
    comment: payload.comment,
    user: payload.user
    // thinking about how to use appended data
  };
};

export const receivePostFromComment = (payload) => {
  return {
    type: RECEIVE_POST_FROM_COMMENT,
    post: payload.appended.post
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};
