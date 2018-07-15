export const fetchCommentForPost = (parentId) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${parentId}/comments`
  });
};

export const fetchCommentForComment = (parentId) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${parentId}/comments`
  });
};

export const createPost = (comment) => {
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
