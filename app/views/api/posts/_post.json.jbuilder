json.extract! passed, :id, :author_id, :caption
json.photos do
  photo_arr = []
  passed.photos.each do |photo|
    photo_arr << url_for(photo)
  end
  json.array! photo_arr
end
json.updated_at passed.updated_at
json.commentIds do
  json.array! passed.comments.ids
end

if passed.likes
  json.likes_by_user_id do
    passed.likes.each do |like|
      json.set! like.user.id do
        json.extract! like.user, :username
        json.like_id like.id
      end
    end
  end
  json.likes_count passed.likes.count
else
  json.likes_by_user_id do
    {}
  end
  json.count 0
end

if passed.hashtags
  json.hashtags do
    json.array! passed.tag_names
  end
else
  json.hashtags do
    {}
  end
end
