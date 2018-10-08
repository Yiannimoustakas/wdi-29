Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # What to do for the "/" or root route
  root to: "pages#funny"

  # Routes for the Pages controller
  # When the browser requests '/hello', process that request by
  # going into the class in the pages_controller.rb file and running
  # the method called 'say_hi' (called an 'action' in Rails)
  # class PagesController < ActiveController::Base
  # end

  get "/hello" => "pages#say_hi"

  get "/hello/:name" => "pages#say_hi_to"

  get "/about" => "pages#about"
  get "/lol"   => "pages#funny"

  # Routes for the Calculator controller
  get "/calc" => "calculator#home"

  # Matches URLS like '/calc/10/*/20'
  get "/calc/:first/:op/:second" => "calculator#do_calc"

  get "/calc/submit" => "calculator#do_calc"

end
