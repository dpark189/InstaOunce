class Api::LikesController <ApplicationController
  def create
    @like = Like.new(like_params)
    parent_type = @like.liked_item_type.pluralize.downcase
    if @like.save
      render "#{parent_type}/#{@like.liked_item_id}"
    else
      error_hash = @like.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if check_belong(@like.user.id)
      @like.destroy
      render "#{parent_type}/#{@like.liked_item_id}"
    else
      render json: ["you do not have permission to delete this like"]
    end
  end

  private

  def like_params
    params.require(:like).permit(:liked_item_id, :liked_item_type, :user_id)
  end
end
