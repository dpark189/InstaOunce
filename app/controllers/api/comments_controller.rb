class Api::CommentsController < ApplicationController
  # before_action :ensure_logged_in, except: [:parent_comments]
  def parent_comments
    type = params[:commentedItemType]
    id = params[:commentedItemId]

    @comments = Comment.where('comments.commented_item_type = ? AND comments.commented_item_id = ?', type.singularize.capitalize, id).includes(:author)
    render 'api/comments/parent_comments', :commentedItemType => type, :commentedItemId => id
  end

  def show
    @comment = Comment.find(params[:id])

    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    type = @comment.commented_item_type.downcase.pluralize
    id = @comment.commented_item_id

    if @comment.save
      render "api/#{type}/show", :id => id
    else
      error_hash = @comment.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      type = @comment.commented_item_type.downcase.pluralize
      render "api/#{type}/show", :id => @comment.commented_item_id
    elsif !check_belong(@comment.author_id)
      render json: ["you do not have permission to edit this post"]
    else
      render @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    type = @comment.commented_item_type.downcase.pluralize
    id = @comment.commented_item_id
    if check_belong(@comment.author_id)
      @comment.destroy
      render "api/#{type}/show", :id => id
    else
      render json: ["you do not have permission to delete this post"]
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :body, :commented_item_id, :commented_item_type)
  end
end
