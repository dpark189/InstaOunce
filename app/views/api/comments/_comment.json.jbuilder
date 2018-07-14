json.extract! passed, :id, :author_id, :commented_item_id, :commented_item_type, :body
json.commentIds do
  json.array! passed.comments.ids
end
json.updated_at passed.updated_at.strftime("%B %e, %Y")
