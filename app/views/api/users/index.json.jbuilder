json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.posts do
  @users.each do |user|
    user.posts.each do |post|
      json.set! post.id do
        json.partial! 'api/posts/post', passed: post
      end
    end
  end
end
