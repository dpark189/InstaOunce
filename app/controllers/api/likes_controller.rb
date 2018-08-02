class Api::LikesController <ApplicationController
  def create
    @like = Like.new(like_params)
    parent_type = @like.liked_item_type.pluralize.downcase
    parent_id = @like.liked_item_id
    if @like.save
      if parent_type == "posts"
        @post = @like.liked_item
      elsif parent_type == "comments"
        @comment = @like.liked_item
      end
      render "api/#{parent_type}/show", :id => parent_id
    else
      error_hash = @like.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def destroy

    @like = Like.includes(:liked_item).find(params[:id])
    parent_type = @like.liked_item_type.pluralize.downcase
    parent_id = @like.liked_item_id
    if parent_type == "posts"
      @post = @like.liked_item
    elsif parent_type == "comments"
      @comment = @like.liked_item
    end

    if check_belong(@like.user.id)
      @like.destroy
      render "api/#{parent_type}/show", :id => parent_id
    else
      render json: ["you do not have permission to delete this like"]
    end
  end

  private

  def like_params
    params.require(:like).permit(:liked_item_id, :liked_item_type, :user_id)
  end
end
