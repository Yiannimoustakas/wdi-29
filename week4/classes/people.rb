require 'pry'

class Person

  # This will write the GETTER and SETTER boilerplate methods for @age and @name
  attr_accessor :age, :name

  # # GETTER: return the value of an internal instance variable (make it visible to "the outside world")
  # def name
  #   @name
  # end
  #
  # # SETTER: lets us do: p.name = "some name"
  # def name=( new_name )
  #   @name = new_name
  # end

  # class method, as opposed to the standard instance methods
  # below
  def self.describe_person
    puts "I am for making people #{ @name }"
  end

  # The initialize method is run whenever we do
  # Person.new()
  def initialize( name, age=20 )
    puts "Making a new Person object..."
    @name = name
    @age = age
  end

  def say_hello
    puts "Hi! I'm #{ @name }. I am #{ @age }."
  end

  def laugh
    puts "Hahahahaha! Nice one!"
  end

  def laugh_at( person )
    puts "Hahah! You are so funny, #{ person.name }"
  end

  def die
    puts "Ugggggh the light grows dim..."
  end

end

class Comedian < Person

  def tell_joke
    print "What's brown and sticky?"
    3.times do
      print "."
      sleep 0.4
    end
    puts " A stick."
  end

  def say_hello
    puts "Hi! Listen to my podcast."
  end

  def laugh
    puts "Hahaha! I'm so funny!"
  end

end

class SerialKiller < Person

  def laugh
    puts "MUAAHAHAHAHAHA"
  end

  def taunt_police
    puts "You will never catch me!"
  end

  def kill( victim )
    # return "Immortal" unless victim.respond_to? :die
    victim.die()
    puts "u ded"
  end

end

binding.pry
puts "Done!"  # otherwise pry just exits
