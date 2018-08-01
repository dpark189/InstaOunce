export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

export const fetchPost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}`
  });
};

export const fetchFeedPosts = (userId, postOffset) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/feed`,
    data: {
      offset: postOffset
    }
  });
};

export const createPost = formData => {

  return $.ajax({
    url: 'api/posts',
    method: 'POST',
    dataType: 'json',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {
      post
    }
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  });
};
