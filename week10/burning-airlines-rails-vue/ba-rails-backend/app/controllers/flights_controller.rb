class FlightsController < ApplicationController
  def index
    render json: Flight.all
  end

  def search
    render json: Flight.where( origin: params[:origin], destination: params[:destination] )
  end

  def show
    render json: Flight.find( params[:id] ), include: [:reservations, :plane]
  end
end
