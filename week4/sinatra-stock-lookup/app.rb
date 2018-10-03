
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  erb :home
end

get "/lookup/form" do
  erb :stock_form
end

get "/lookup/results" do
  require 'stock_quote'
  @stock = params[ :stock_symbol ] # 'AAPL'
  stock_result = StockQuote::Stock.quote( @stock )
  @price = stock_result.latest_price
  @company = stock_result.company_name
  erb :stock_results
end
