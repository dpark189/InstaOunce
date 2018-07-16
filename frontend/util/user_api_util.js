export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const updateUser = (userId, formData) => {
debugger
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
