Rails.application.routes.draw do

  resources :users, except: [ :index ]  # don't create the index action or template

  # Session routes for login/logut
  get    "/login" => "session#new"     # login form
  post   "/login" => "session#create"  # form submits here to perform login and set session
  delete "/login" => "session#destroy" # logout (delete session)

end
