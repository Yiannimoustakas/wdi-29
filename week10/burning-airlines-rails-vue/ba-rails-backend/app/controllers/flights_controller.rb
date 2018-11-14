class FlightsController < ApplicationController

  skip_before_action :verify_authenticity_token

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
    flight = Flight.find params[:id]

    # create lookup tables (hash) of reservations for easy frontend checking
    reservations_lookup = {}
    user_reservations_lookup = {}
    flight.reservations.each do |res|
      if res.user === current_user
        user_reservations_lookup["#{res.row}-#{res.col}"] = 1
      else
        reservations_lookup["#{res.row}-#{res.col}"] = 1
      end
    end


    # JS: this.flight.reservations.forEach( res => this.reservationLookup[`${res.row}-${res.col}`] = true );

    render json: {
      flight: flight,
      user_reservations: user_reservations_lookup,
      reservations: reservations_lookup
    }, include: 'plane', methods: 'departure_date_formatted'

  end

  def create_reservation

    r = Reservation.create(
      row: params[:row],
      col: params[:col],
      flight_id: params[:flight_id],
      user: current_user
    )

    if r.persisted?
      render json: r
    else
      render json: {errors: r.errors.full_messages}, status: 422
    end


  end

end
