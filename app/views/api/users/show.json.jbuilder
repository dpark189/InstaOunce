json.user do
  json.extract! @user, :id, :username, :phone_number, :email, :full_name, :website, :bio, :gender, :profile_picture
  json.postIds do
    json.array! @user.posts.ids
  end
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption
      json.photos do
        post.photos.each do |photo|
          json.photoUrl url_for(photo)
        end
      end
      json.updated_at post.updated_at.strftime("%B %e, %Y")
    end
  end
end
