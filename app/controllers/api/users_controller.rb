
class Api::UsersController < ApplicationController
  def index
    @users = User.all.includes(
      :posts,
      :comments,
      :likes,
      :people_im_following
    )
    render :index
  end

  def show
    @user = User.includes(
      :posts,
      :comments,
      :likes,
      :people_im_following,
      :people_following_me,
    ).find_by(:users => {:id => params[:id]})
  end

  def fetch_stories
    @user = User.find(params[:userId])
    id_arr = @user.all_follow_ids
    @users = User.where(id: id_arr.uniq)
    render :index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      error_hash = @user.errors.to_hash
      string_errors_hash = error_hash.stringify_keys
      render json: string_errors_hash, status: 422
    end
    # TODO: can parse errors by their keys ie: @user.errors[:full_name] could use this to better display errors on form
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      error_hash = @user.errors.to_hash
      string_errors_hash = error_hash.stringify_keys
      render json: string_errors_hash, status: 422
    end
  end

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :phone_number,
      :email,
      :full_name,
      :website,
      :bio,
      :gender,
      :profile_picture
    )
  end

end
