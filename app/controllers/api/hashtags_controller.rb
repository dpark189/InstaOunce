class HashtagController < ApplicationController
  def index
    @hashtags = Hashtag.all.includes(:posts)
    render :index
  end

  def show
    @hashtag = Hashtag.find(params[:id])
    render :show
  end

end
