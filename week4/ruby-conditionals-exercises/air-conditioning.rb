# Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
  # If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "What is the current temperature?: "
# get user input, and convert the resulting string to a floating point number
current_temp = gets.to_f

print "Is the A/C functional? (y/n): "
ac_working = gets.chomp.downcase

print "What is the desired temperature?: "
desired_temp = gets.to_f

# p current_temp, ac_working, desired_temp

if ac_working == "y"
  # AC is working
  if current_temp > desired_temp
    puts "Turn on the A/C please!"
  end
else
  # AC not working block
  if current_temp > desired_temp
    puts "Fix the A/C, it's too hot dangert!"
  else
    puts "Fix the A/C when you get a chance, no rush..."
  end
end
