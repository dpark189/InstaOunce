json.extract! passed, :id, :author_id, :caption
json.photos do
  passed.photos.each do |photo|
    json.photoUrl url_for(photo)
  end
end
json.updated_at passed.updated_at.strftime("%B %e, %Y")
json.commentIds do
  json.array! passed.comments.ids
end

if passed.likes
  json.likes do
    json.count passed.likes.count
    json.users do
      passed.likes.each do |like|
        json.set! like.user.id do
          json.extract! like.user, :username
        end
      end
    end
  end
else
  json.likes do
    json.count 0
    json.users {}
  end
end
