
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  "Welcome to the home page"
  erb :home
end
