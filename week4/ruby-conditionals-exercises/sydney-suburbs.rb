# Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).

# loops forever, no condition (ctrl + c to quit)
loop do

  print "Which suburb do you live in?: "
  suburb = gets.chomp.downcase


  # case statements in Ruby return the value of the last line
  # of the block which is evaluated - so you can store the
  # result of a case into a variable
  response = case suburb
  when "bondi"   then "Nice boat shoes."
  when "newport" then "Oh, so you're a white supremacist?"
  when "manly"   then "Surf's up bro! Watch out for tourists."
  when "newtown" then "Nice piercings. Smash the state."
  else
    "I'm sure it's very nice there."
  end

  puts response

  # case with one-line when clauses, but still using 'puts':
  #
  # case suburb
  # when "bondi"   then puts "Nice boat shoes."
  # when "newport" then puts "Oh, so you're a white supremacist?"
  # when "manly"   then puts "Surf's up bro! Watch out for tourists."
  # when "newtown" then puts "Nice piercings. Smash the state."
  # else
  #   puts "I'm sure it's very nice there."
  # end

  # Tradition chain of if-elsif-elsif blocks for testing a variable's contents
  #
  # if suburb == "bondi"
  #   puts "Nice boat shoes."
  # elsif suburb == "newport"
  # puts "Nice boat shoes."  puts "Oh, so you're a white supremacist?"
  # elsif suburb == "manly"
  #   puts "Surf's up bro! Watch out for tourists."
  # elsif suburb == "newtown"
  #   puts "Nice piercings. Smash the state."
  # else
  #   puts "I'm sure it's very nice there."
  # end

end
