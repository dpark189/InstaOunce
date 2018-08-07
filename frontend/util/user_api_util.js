export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const updateUser = (userId, formData) => {

  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    dataType: 'json',
    processData: false,
    contentType: false,
    data: formData

    // { formData }
  });
};

export const fetchStories = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/stories`
  });
};

export const searchUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: 'api/users/search',
    data: {
      query
    }
  });
};
