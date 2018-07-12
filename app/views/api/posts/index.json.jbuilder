
json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption
      json.updated_at post.updated_at.strftime("%B %e, %Y")
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
