json.extract! user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender, :profile_picture
json.postIds do
  json.array! user.posts.ids
end
json.commentIds do
  json.array! user.comments.ids
end
