class Api::PostsController < ApplicationController
  # before_action :ensure_logged_in, except: [:index]
  def index
    @posts = Post.all.includes(:author)
    render :index
  end

# TODO: might be able to do logic for showing followed user posts here
  def show
    @post = Post.find(params[:id])
    @user = User.find(@post.author_id)
    render :show
  end

  def create
    @post = Post.new(post_params)
    @user = User.find(@post.author_id)
    if @post.save
      # render 'api/users/show', :id => @post.author_id
      render :show
    else
      error_hash = @post.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params) && check_belong(@post.author_id)
      render :show
    elsif !check_belong(@post.author_id)
      render json: ["you do not have permission to edit this post"]
    else
      error_hash = @post.errors.to_hash
      error_hash.stringify_keys
      render json: error_hash, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if check_belong(@post.author_id)
      @post.destroy
      render :show
    else
      render json: ["you do not have permission to delete this post"]
    end
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :caption, :photos)
  end
end
