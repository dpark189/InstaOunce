json.post do
  json.extract! @post, :id, :author_id, :caption
  json.updated_at @post.updated_at.strftime("%B %e, %Y")
end

json.user do
  json.extract! @user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender, :profile_picture
end
