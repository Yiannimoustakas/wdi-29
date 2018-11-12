Rails.application.routes.draw do
  get '/flights' => 'flights#index'
  get '/flights/:id' => 'flights#show'
  get '/search/:origin/:destination' => 'flights#search'
end
