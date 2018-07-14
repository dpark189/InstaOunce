require 'pry'
json.comments do
  binding.pry
  json.partial! 'api/comments/comment', passed: @comment
end

json.user do
  json.partial! 'api/users/user', user: @comment.author
end

# json.set! "#{@comment.commented_item_type.downcase}" do
#   json.partial! "api/#{type}/#{type.singularize}", passed: @comment.commented_item
# end
