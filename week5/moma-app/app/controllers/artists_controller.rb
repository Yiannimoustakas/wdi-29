
class ArtistsController < ApplicationController

  # CREATE ##########################################
  def new
    @artist = Artist.new
  end

  def create

    # use 'strong params' to filter the fields from the form (for security reasons)
    Artist.create( artist_params )

    # Artist.create(
    #   name: params[:artist][:name],
    #   nationality: params[:artist][:nationality],
    # )

    redirect_to( artists_path )  # redirect to the index

  end

  # READ ############################################
  def index
    @artists = Artist.all # returns an array of Artist objects
  end

  def show
    @artist = Artist.find params[:id] # returns one Artist object
  end

  # UPDATE ##################################################

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    @artist = Artist.find params[:id]
    @artist.update artist_params

    redirect_to artist_path(@artist.id)
  end

  # DESTROY ########################################
  def destroy
    artist = Artist.find params[:id]
    artist.destroy

    redirect_to( artists_path )  # index page
  end

  private

  def artist_params
    # This method ensures that the 'artist' key is set in the params hash, and then
    # makes sure only the permitted columns are taken from the form (and saved to the database)
    params.require(:artist).permit( :name, :nationality, :dob, :period, :roundness, :bio, :image )
  end

end
