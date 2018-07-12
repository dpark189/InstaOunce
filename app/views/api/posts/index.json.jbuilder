json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption 
    end
  end
end
