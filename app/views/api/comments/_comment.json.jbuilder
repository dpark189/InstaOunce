json.extract! passed, :id, :author_id, :commented_item_id, :commented_item_type, :body
json.commentIds do
  json.array! passed.child_comments.ids
end
json.updated_at passed.updated_at.strftime("%B %e, %Y")
if passed.likes
  json.likes do
    json.count passed.likes.count
    json.users do
      passed.likes.each do |like|
        json.set! like.user.id do
          like.user.username
        end
      end
    end
  end
else
  json.likes do
    json.count 0
    json.users do
      {}
    end
  end
end
