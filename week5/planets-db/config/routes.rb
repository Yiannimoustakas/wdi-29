Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Planets CRUD routes

  # CREATE: blank form & form submit action
  get "/planets/new" => "planets#new"
  post "/planets"    => "planets#create"

  # READ: index & show
  get "/planets" => "planets#index"
  get "/planets/:id" => "planets#show", as: 'planet'

  # UPDATE: prefilled form & form submit action
  get "/planets/:id/edit" => "planets#edit", as: 'planet_edit'
  post "/planets/:id"     => "planets#update"

  # DELETE
  get "/planets/:id/delete" => "planets#destroy", as: 'planet_destroy'

end
