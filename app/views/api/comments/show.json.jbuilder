require 'pry'
json.comment do
  json.partial! 'api/comments/comment', passed: @comment
end

json.user do
  json.partial! 'api/users/user', user: @comment.author
end

json.childComments do
  @comment.child_comments.each do |comment|
    json.partial! 'api/comments/comment', passed: comment
  end
end

json.parent do
  json.set! "#{@comment.commented_item_type.downcase}" do
    json.partial! "api/#{@comment.commented_item_type.downcase.pluralize}/#{@comment.commented_item_type.downcase.singularize}", passed: @comment.commented_item
  end
end


# Comment.select('comments.*, child_comments.*').from('comments').join("comments as child_comments on comments.id = child_comments.commented_item_id and child_comments.commented_item_type = 'Comment'").where('comments.id = 7 and child_comments.id != 7;')
#
# select comments.*, child_comments.*
# from comments
# join comments as child_comments on comments.id = child_comments.commented_item_id and child_comments.commented_item_type = 'Comment'
# where comments.id = 7 and child_comments.id != 7;
