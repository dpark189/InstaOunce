
json.extract! user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender
if !user.posts.empty?
  json.last_update user.posts.last.updated_at
end

json.profile_picture do
  if user.profile_picture.attached? == true
    json.profile_pictureUrl url_for(user.profile_picture)
  else
    {}
  end
end
json.postIds do
  json.array! user.posts.ids
end
json.commentIds do
  json.array! user.comments.ids
end
json.followeeIds do
  json.array! user.people_im_following.ids
end

json.followerIds do
  json.array! user.people_following_me.ids
end
