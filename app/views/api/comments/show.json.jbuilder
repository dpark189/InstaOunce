
json.comment do
  json.partial! 'api/comments/comment', passed: @comment
end

json.user do
  json.partial! 'api/users/user', user: @comment.author
end

json.childComments do
  json.comment do
    @comment.child_comments.each do |comment|
      json.partial! 'api/comments/comment', passed: comment
    end
  end
end

json.parent do
  json.set! "#{@comment.commented_item_type.downcase}" do
    json.partial! "api/#{@comment.commented_item_type.downcase.pluralize}/#{@comment.commented_item_type.downcase.singularize}", passed: @comment.commented_item
  end
end
