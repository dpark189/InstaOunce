json.user do
  json.partial! 'api/users/user', user: @user
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', passed: post
    end
  end
end
