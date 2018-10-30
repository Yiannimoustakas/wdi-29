class SecretsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    render json: Secret.all.reverse
  end

  def create
    secret = Secret.create content: params[:content]
    render json: {secret: secret, created: true}
  end
end
