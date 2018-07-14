class Api::CommentsController < ApplicationController
  def parent_comments
    type = params[:commentedItemType]
    id = params[:commentedItemId]

    @comments = Comment.where('comments.commented_item_type = ? AND comments.commented_item_id = ?', type.singularize.capitalize, id).includes(:author)
    render 'api/comments/parent_comments', :commentedItemType => type, :commentedItemId => id
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      error_hash = @comment.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :body, :commented_item_id, :commented_item_type)
  end
end
