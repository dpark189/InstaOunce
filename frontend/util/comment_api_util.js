export const fetchCommentsForPost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/comments`
  });
};

export const fetchCommentsForComment = (commentId) => {
  return $.ajax({
    method: 'GET',
    url: `api/comments/${commentId}/comments`
  });
};

export const fetchComment = (commentId) => {
  return $.ajax({
    method: "GET",
    url: `api/comments/${commentId}`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {
      comment
    }
  });
};
// createPost should return the comment created and the updated parent with an incremented commentId array

export const deletePost = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`,
  });
};
// createPost should return the comment created and the updated parent with an decremented commentId array

export const updatePost = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/comments${comment.id}`,
    data: {
      comment
    }
  });
};
