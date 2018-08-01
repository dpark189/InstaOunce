
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
      json.partial! '/api/users/user', user: post.author
    end
  end
end

json.hashtags do
  @hashtags.each do |tag|
    json.set! tag.name do
      json.extract! tag, :id, :name
    end
  end
end
