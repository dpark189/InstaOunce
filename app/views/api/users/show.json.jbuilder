json.user do
  json.extract! @user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender, :profile_picture
  json.postIds @user.posts.ids
end

json.post do
  @posts.each do |post|
    json.extract! post, :id, :author_id, :caption, :updated_at
  end
end
