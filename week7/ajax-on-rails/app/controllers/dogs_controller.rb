class DogsController < ApplicationController

  skip_before_action :verify_authenticity_token  # do not do security checks on forms

  before_action :cors_allow  # make sure all actions allow remote JS access

  def create
    new_dog = Dog.create(
      name: params[:name],
      age: params[:age],
      roundness: params[:roundness],
      image: params[:image]
    )

    render json: new_dog
  end

  def index
    render json: Dog.all
  end

  def show
  end

  private
  def cors_allow
    headers['Access-Control-Allow-Origin'] = '*';
  end

end
