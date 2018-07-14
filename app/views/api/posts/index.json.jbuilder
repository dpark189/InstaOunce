
json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', passed: post
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.author_id do
      json.extract! post.author, :id, :username
    end
  end
end
