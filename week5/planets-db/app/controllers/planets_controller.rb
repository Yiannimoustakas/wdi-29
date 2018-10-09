
class PlanetsController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false

  # CREATE part 1: blank form
  def new
  end

  # CREATE part 2: form submit here, to create item
  def create

    Planet.create(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      temperature: params[:temperature],
      moons: params[:moons]
    )

    # CREATE has no template of its own:
    # redirect to index page
    redirect_to( planets_path )

  end

  # READ type 1: index of all items in 'planets'
  def index
    # Get all rows in the planets table
    # (as an array of Planet objects)
    @planets = Planet.all
  end

  # READ type 2: show page, details for one item. whose ID we know
  def show
    # Gets us one row, and returns it as an object
    # (an instance of the Planet model class)
    @planet = Planet.find params[:id]
  end

  # UPDATE part 1: show the prefilled edit form
  def edit
    @planet = Planet.find params[:id]
  end

  # UPDATE part 2: form submit to here,
  # update item in database and redirect to show page
  def update
    planet = Planet.find params[:id]
    planet.update(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      temperature: params[:temperature],
      moons: params[:moons]
    )

    # redirect to the show page for the planet we just updated
    redirect_to( planet_path(planet.id) )
  end

  # DELETE: remove the item from the table
  def destroy
    planet = Planet.find params[:id]
    planet.destroy

    redirect_to( planets_path )
  end


end
