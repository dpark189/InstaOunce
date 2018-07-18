
class Api::PostsController < ApplicationController
  # before_action :ensure_logged_in, except: [:index]
  def index
    @posts = Post.all.includes(
      :author,
      likes: [:user],
      comments: [:likes, :author, :child_comments]
    )
    render :index
  end

# TODO: might be able to do logic for showing followed user posts here
  def show
    @post = Post.includes(
      :author,
      comments: [:likes, :author, :child_comments],
      likes: [:user]
    ).find_by(
      :comments => {
        :commented_item_type => 'Post',
        :commented_item_id => params[:id]
      })
      if !@post
        @post = Post.find(params[:id])
      end
    render :show
  end

  def create
    @post = Post.new(post_params)
    @user = User.find(@post.author_id)
    if @post.save
      # render 'api/users/show', :id => @post.author_id
      hashtag_arr = @post.caption.scan(/(#[a-z\d-]+)/i).flatten
      if !hashtag_arr.empty?
        hashtag_arr.each do |hashtag|
          tag = Hashtag.new(name: hashtag)
          if !tag.save
            tag = Hashtag.find_by(name: hashtag)
          end
          Hashtagging.create(hashtag_id: tag.id, post_id: @post.id)
        end
      end

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
