
require 'sinatra'
require 'sinatra/reloader'

def do_subtraction(n, m)
  # totally unnecessary method
  n - m
end

get "/" do
  # this string will be the response sent to the browser
  # (the last line of the block is what is returned, i.e. implicit return)
  "Hello World from the root URL of this fantastic site!"
end

get "/luckynumber" do
  number = Random.rand( 1..200 )
  "Here is your lucky number: #{ number }"  # we can interpolate variables into our output
end

get "/hello" do
  @message = "Hello from the /hello path!"
  erb :hello  # use the file views/hello.erb as the response to this request
  # NOTE! Will use views/layout.erb first, if the file exists
end

get "/hello/:name" do
  # this route handler will respond to any route that starts with /hello/SOMETHING

  # use the symbol in the path argument above (get "/hello/:name") as a key into
  # the params hash
  # first_name = params[ :name ]
  "Hello, #{ params[:name] }. Welcome to your custom page on this website."
end

get "/hello/:first_name/:last_name" do
  puts "=" * 100  # print 100 '=' symbols together
  p params  # this will output into the iTerm window where the server is running
  puts "=" * 100

  # require 'pry'; binding.pry  # this will pause the webserver mid-response and put you in pry
  # (type 'exit' to continue with the response)

  "Hello, #{ params[:first_name] }, last name #{ params[:last_name] }. Welcome to the best website ever."
end

# Calculator

get "/calc/add/:x/:y" do   # handle routes like "/calc/add/1/255"
  p params  # this will output into the iTerm window where the server is running
  x = params[:x].to_i
  y = params[:y].to_i
  result = x + y
  # The '@' promotes this variable to an "instance variable",
  # which means it is visible within every method of this object:
  # in particular, it's visible inside our ERB template (for interpolation).
  @content = "The sum of #{x} and #{y} is #{result}."

  # layout.erb will first be rendered, and will interpolate the entire contents of
  # calc_add.erb where the <%= yield %> appears in layout.erb
  erb :calc_add
end

get "/calc/sub/:x/:y" do
  x = params[:x].to_i
  y = params[:y].to_i
  result = do_subtraction(x, y)
  @content = "The difference between #{x} and #{y} is #{result}."
  erb :calc_sub
end
