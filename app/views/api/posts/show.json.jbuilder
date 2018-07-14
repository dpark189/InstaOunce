json.post do
  json.partial! 'api/posts/post', passed: @post
end

json.user do
  json.partial! 'api/users/user', user: @post.author
end
