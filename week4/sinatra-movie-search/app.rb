require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get "/" do
  erb :home
end

get "/search" do
  erb :search_form
end

get "/search/results" do
  API_KEY =  'INSERT_API_KEY_FROM_SLACK_HERE__DONT_WANT_TO_PUSH_IT_TO_GITHUB'
  API_BASE_URL = 'https://api.themoviedb.org/3'
  @query = params[ :query ]

  # lookup movie using themoviedb.org
  url = "#{API_BASE_URL}/search/movie?api_key=#{API_KEY}&query=#{@query}"
  puts "=" * 100, url

  response = HTTParty.get( url )
  @results = response['results']

  # we'll use this to construct a full image URL
  @img_base = 'http://image.tmdb.org/t/p/w185'

  erb :search_results
end

get "/details/:id" do
  # another themoviedb.org request to get details for a movie
end
