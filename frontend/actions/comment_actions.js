import * as CommentApiUtil from '../util/comment_api_util';
import receivePost from './post_actions';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

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

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};
// will have to update the author's state in redux later

export const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors
  };
};

// --------- fetchComment aka: parent_comments page ----------
// returns parent_comments page for comment
// when parent = post/comment returns
// {
//   comment: {..},
//   user: {..}
// }

export const fetchCommentsForPost = (postId) => {
  return dispatch => {
    return CommentApiUtil.fetchCommentForPost(postId).then(
      (payload) => dispatch(receiveComments(payload))
    );
  };
};

export const fetchCommentsForComment = (commentId) => {
  return dispatch => {
    return CommentApiUtil.fetchCommentForComment(commentId).then(
      (payload) => dispatch(receiveComment(payload))
    );
  };
};

// fetching single comment will be used in a commentItemContainer (possibly)
// shouldn't need to fetch parent since it is not changing

export const fetchComment = (commentId) => {
  return dispatch => {
    return CommentApiUtil.fetchCommentForComment(commentId).then(
      (payload) => dispatch(receiveComment(payload))
    );
  };
};

// --------- createComment ----------
// returns show page for comment
// when parent = post returns
// {
//   comment: {..},
//   user: {..},
//   parent: {
//     post: {..}
//   }
// }

export const createCommentForPost = (comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then(
      (payload) => dispatch(receiveComment(payload)),
      (errors) => dispatch(receiveCommentErrors(errors))
    ).then(
      (payload) => dispatch(receivePost(payload.parent.post))
    );
  };
};

// returns show page for comment
// when parent = comment returns
// {
//   comment: {..},
//   user: {..},
//   parent: {
//     comment: {..}
//   }
// }

export const createCommentForComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then(
      (payload) => dispatch(receiveComment(payload)),
      (errors) => dispatch(receiveCommentErrors(errors))
    ).then(
      (payload) => dispatch(receiveComment(payload.parent.comment))
    );
  };
};

// --------- deleteComment ----------
  // returns show page for parent
  // when parent = comment returns
  // {
  //   comment: {..},
  //   user: {..},
  //   parent: {
  //     comment: {..}
  //   }
  // }

  export const deleteCommentForComment = (commentId) => {
    return dispatch => {
      return CommentApiUtil.deleteComment(commentId).then(
        () => dispatch(removeComment(commentId)),
        (error) => dispatch(receiveCommentErrors(error))
      ).then(
        (comment) => dispatch(receiveComment(comment))
      );
    };
  };

  // when parent = post returns
  // {
  //   post: {..},
  //   user: {..}
  // }

  export const deleteCommentForPost = (commentId) => {
    return dispatch => {
      return CommentApiUtil.deleteComment(commentId).then(
        () => dispatch(removeComment(commentId)),
        (error) => dispatch(receiveCommentErrors(error))
      ).then(
        (payload) => dispatch(receivePost(payload))
      );
    };
  };

  // --------- updateComment ----------
    // returns show page for parent
    // parent agnostic
    // {
    //   comment: {..},
    //   user: {..},
    //   parent: {
    //     comment: {..}
    //   }
    // }

  export const updateComment= (comment) => {
    return dispatch => {
      return CommentApiUtil.updateComment(comment).then(
        (payload) => dispatch(receiveComment(payload)),
        (error) => dispatch(receiveCommentErrors(error))
      );
    };
  };
