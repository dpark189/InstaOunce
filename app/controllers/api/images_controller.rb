class ImagesController < ApplicationController

  def show
    @image = Image.find(params[:id])
    render :show
  end

  def create
    
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :post_id, :author_id)
  end
end
