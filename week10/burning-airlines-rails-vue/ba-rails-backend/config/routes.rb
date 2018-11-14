Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  get '/flights' => 'flights#index'
  get '/flights/:id' => 'flights#show'
  get '/search/:origin/:destination' => 'flights#search'

  post '/booking' => 'flights#create_reservation'
end
