json.post do
  json.partial! 'api/posts/post', passed: @post
end

json.user do

  json.partial! 'api/users/user', user: @post.author
end

json.comments do
  @post.comments.each do |comment|

    json.partial! 'api/comments/comment', passed: comment
  end
end
