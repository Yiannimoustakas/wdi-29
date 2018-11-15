Rails.application.routes.draw do

  # get '/fruits' => 'fruits#index'
  # get '/fruits/:id' => 'fruits#show'
  # post '/fruits' => 'fruits#create'

  resources :fruits, only: [:index, :show, :create]
end
