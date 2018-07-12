json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end

json.posts do
  @users.each do |user|
    user.posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :author_id, :caption
        json.updated_at post.updated_at.strftime("%B %e, %Y")
      end
    end
  end
end
