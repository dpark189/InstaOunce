export const createLike = (likedType, likedId, currentUserId) => {
  
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: {
      like: {
        liked_item_id: likedId,
        liked_item_type: likedType,
        user_id: currentUserId
      }
    }
  });
};

export const deleteLike = (likeId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${likeId}`
  });
};
