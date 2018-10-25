Rails.application.routes.draw do
  # get 'dogs/create'
  # get 'dogs/index'
  # get 'dogs/show'
  resources :dogs, only: [:create, :index, :show]

  get '/app' => 'dashboard#app'
  get '/uptime' => 'dashboard#uptime'
  get '/cpu_hog' => 'dashboard#cpu_hog'
end
