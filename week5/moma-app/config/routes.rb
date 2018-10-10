Rails.application.routes.draw do

  # CREATE
  get "/artists/new" => "artists#new"
  post "/artists" => "artists#create"

  # READ
  get "/artists" => "artists#index"
  get "/artists/:id" => "artists#show", as: 'artist'

  # UPDATE
  get "/artists/:id/edit" => "artists#edit", as: 'artist_edit'

  patch "/artists/:id" => "artists#update"

  # DELETE
  delete "/artists/:id" => "artists#destroy", as: 'artist_delete'


  # Works CRUD routes
  resources :works


end
