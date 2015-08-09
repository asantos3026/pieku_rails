class PiekusController < ApplicationController
  before_filter :authorize, except: [:index, :show]

  # show ALL piekus in db
  def index
    @piekus = Pieku.all
    render json: @piekus
  end

  # creates new pieku in db
  # that BELONGS TO current_user
  def create
    pieku = current_user.piekus.create(pieku_params)
    redirect_to pieku_path(pieku)
  end

  def show
    @pieku = Pieku.find(params[:id])
    render :show
  end

  def update
    pieku = Pieku.find(params[:id])
    if current_user.piekus.include? pieku
      pieku.update_attributes(pieku_params)
      redirect_to pieku_path(pieku)
    else
      redirect_to profile_path
    end
  end

  def destroy
    id = params[:id]
    pieku = Pieku.find(id).destroy
    redirect_to "/"
  end

  private
    def pieku_params
      params.require(:pieku).permit(:title, :line_1, :line_2, :line_3)
    end
end
