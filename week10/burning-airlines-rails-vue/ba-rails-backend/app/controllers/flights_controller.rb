class FlightsController < ApplicationController

  # This action is provided by the Knock gem
  # It also creates a 'current_user' variable for us
  before_action :authenticate_user, except: [:index]

  def index
    render json: Flight.all
  end

  def search
    # Return all rows from the flights table whose origin & destination columns match the search
    # query
    # We also have to explicitly ask for any associations we want to include in the JSON
    # data by using 'include:'
    # And we have to ask for any model methods to be run and included in the data, using 'methods:'

    puts 'current_user: ===================================================='
    p current_user
    puts '=================================================================='
    
    render json: Flight.where( origin: params[:origin], destination: params[:destination] ), include: 'plane', methods: 'departure_date_formatted'
  end

  def show
    render json: Flight.find( params[:id] ), include: [:reservations, :plane], methods: 'departure_date_formatted'
  end
end
