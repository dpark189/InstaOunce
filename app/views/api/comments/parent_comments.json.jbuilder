json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', passed: comment
    end
  end
end

json.users do
  @comments.each do |comment|
    json.set! comment.author.id do
      json.partial! 'api/users/user', user: comment.author
    end
  end
end
