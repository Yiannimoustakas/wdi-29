
class CalculatorController < ApplicationController

  def home
  end

  def do_calc
    @first = params[:first].to_f
    @op = params[:op]
    @second = params[:second].to_f

    if @op == 'div'
      @op = '/'  # because '/' breaks our URL
    end

    # saves us writing a long case statement
    @result = @first.send(@op, @second)
  end

end
