# Our controller classes get a lot of their behaviour
# (the essential 'plumbing' that makes them Rails controllers)
# from a parent class defined by Rails: ApplicationController
class PagesController < ApplicationController

  # This is a method of a Controller class, but in Rails
  # we call such a method an 'action'
  def say_hi
  end

  def say_hi_to
    @hello_recipient = params[ :name ]
  end

  def about
    puts "Someone requested the /about URL !!!!!!!!!!!!!!!!!!!!!!!!!!!"
  end

  def funny
  end

end
