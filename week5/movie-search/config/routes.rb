Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # What happens when you go to "/"
  root to: "movies#search_form"

  get "/search" => "movies#search_form"

  get "/search/results" => "movies#search_results"

  get "/movies/:id" => "movies#show"

end
