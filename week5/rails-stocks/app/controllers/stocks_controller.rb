
class StocksController < ApplicationController

  def form
  end

  def lookup
    # puts params
    # raise "hell"
    @stock = params[ :stock_name ]
    @stock_result = StockQuote::Stock.quote( @stock )
    # @price = result.latest_price
    # @company_name = result.company_name
    # raise "hell"
  end

end
