json.extract! passed, :id, :author_id, :commented_item_id, :commented_item_type, :body
json.commentIds do
  json.array! passed.child_comments.ids
end
json.updated_at passed.updated_at.strftime("%B %e, %Y")

if passed.likes
  json.likes do
    json.count passed.likes.count
    passed.likes.each do |like|
      json.set! like.id do
        json.extract! like.user, :id, :username
      end
    end
  end
else
  json.likes do
    json.count 0
    json.likes {}
  end
end
