Rails.application.routes.draw do
  # get 'dashboard/uptime'
  # get 'dashboard/cpu_hog'
  # get 'dashboard/app'

  get '/app' => 'dashboard#app'
  get '/uptime' => 'dashboard#uptime'
  get '/cpu_hog' => 'dashboard#cpu_hog'
end
