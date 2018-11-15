class FruitsController < ApplicationController

  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html  # render the index.html.erb template
      format.json { render json: @fruits }
    end

  end # index

  def show
  end

  def create
    fruit = Fruit.create fruit_params
    if fruit.persisted?
      redirect_to fruit   # go to the show page for this fruit,
      # ie fruits_path(fruit)
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end

end
