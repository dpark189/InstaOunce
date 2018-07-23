class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      @errors = {}
      @errors['login'] = ['Invalid credentials']
      render json: @errors, status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end
end
