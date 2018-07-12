class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
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
      debugger
      render json: @user.errors.full_messages, status: 422
    end
    # TODO: can parse errors by their keys ie: @user.errors[:full_name] could use this to better display errors on form
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
