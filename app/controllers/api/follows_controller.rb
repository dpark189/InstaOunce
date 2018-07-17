class Api::FollowsController < ApplicationController
  # react route: /users/:userId/follows
  # rails route: api/users/:userId/follows
  def index
    @follows = Follow.includes(
      :follower,
      :followee
    ).where(
      :follows => {
        :follower_id => params[:user_id]
      }
    )
  end
  # rails route: api/users/:userId/feed
  # follows#post_feed as user_post_feed
  def post_feed
    @follows = Follow.includes(
      :follower,
      :followee,
      feed_posts: [
        :author,
        likes: [:user],
        comments: [:likes, :author, :child_comments]
      ]
    ).find_by(
      :follows => {
        :follower_id => params[:userId]
      }
    )
    @posts = @follows.feed_posts
    render 'api/posts/index'
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      error_hash = @follow.errors.to_hash
      error_hash.stringify_keys
      render error_hash.errors.full_messages
    end
  end

  def destroy
    @follow = Follow.includes(:follower, :followee).find(params[:id])
    @follower = @follow.follower
    @followee = @follow.followee
    if check_belong(@follow.follower_id)
      @follow.destroy
      render :show
    else
      render json: ["you do not have permission to delete this like"]
    end
  end
  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end

# follows = Follow.includes( :follower, :followee, feed_posts: [ :author, likes: [:user], comments: [:likes, :author, :child_comments] ]).find_by( :follows => { :follower_id => params[:id] })