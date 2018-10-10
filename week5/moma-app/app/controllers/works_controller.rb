
class WorksController < ApplicationController

  # CREATE
  def new
    @work = Work.new   # create a blank object for the form_for helper to use
  end

  def create
    Work.create work_params  # pass in the strong version of the form params
    redirect_to( works_path )  # redirect to the index "/works"
  end

  # READ
  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]  # ID is in params because of the route "/works/:id"
  end

  # UPDATE
  def edit

  end

  def update

  end

  # DESTROY
  def destroy

  end

  private

  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end


end
