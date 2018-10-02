# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

require 'colorize'

print "Enter the maximum number: "
MAX_VALUE = gets.to_i  # use a constant (uppercase-starting variable name)

secret_number = Random.rand(0..MAX_VALUE)  # including MAX_VALUE

guess = -1   # the while loop body is now guaranteed to run at least once

while guess != secret_number

  # require 'pry'; binding.pry     # pause code and open pry at next line


  print "Please enter your guess (0-#{ MAX_VALUE }): "
  guess = gets.to_i
  if guess > secret_number
    puts "Guess lower.".red
  elsif guess < secret_number
    puts "Guess higher.".yellow
  end
end

# If we have exited the loop and got to this line, the user must have guessed correctly
puts "Congratulations, you guessed it!".green
