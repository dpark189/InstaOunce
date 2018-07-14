json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :author_id, :commented_item_id, :commented_item_type, :body
      json.updated_at comment.updated_at.strftime("%B %e, %Y")
    end
  end
end

json.users do
  @comments.each do |comment|
    json.set! comment.author.id do
      user = comment.author
      json.extract! user, :id, :username
      json.commentIds do
        json.array! @comments.map do |comment|
          if comment.author_id == user.id
            comment.id
          end
        end
      end
    end
  end
end
