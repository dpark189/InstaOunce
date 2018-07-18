export const fetchHashtags = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/hashtags'
  });
};

export const fetchHashtag = (hashtagId) => {
  return $.ajax({
    method: 'GET',
    url: `api/hashtags/${hashtagId}`
  });
};
