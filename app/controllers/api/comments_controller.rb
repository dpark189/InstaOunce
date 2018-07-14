class CommentsController < ApplicationController
  def post_comments
    @comments = Comment.where('comment_item_type = Post AND comment_item_id = ?', params[:postId])
    render :index
  end

  def comment_comments
    @comments = Comment.where('comment_item_type = Comment AND comment_item_id = ?', params[:commentId])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render @comment.errors.full_messages
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
