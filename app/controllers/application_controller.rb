class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    user = User.find_by(session_token: session[:session_token])
    user
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
    else
      render json: ["no current user found"], status: 404
    end
  end

end
