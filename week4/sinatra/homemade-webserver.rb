
require 'socket'

# open a socket (TCP/IP networking) connection on port 2000
server = TCPServer.open( 2000 )

loop do

  # start listening for connections on the port we just opened
  puts "Waiting for a connection..."
  client_connection = server.accept()

  # the line above will wait (block) until we do actually get a connection on port 2000
  puts "Got connection!"

  request = client_connection.recv( 1024 )
  puts "Got request: #{request}"

  path = request.split(' ')  # => ["GET", "/someotherpath", "HTTP/1.1"]
  path = path[1]  # => "/someotherpath"

  puts "Path is: #{path}"

  content = case path
  when "/" then "WELCOME THE THE HOME PAGE!!!!1!"
  when "/about" then "Here is what this site is all about"
  when "/seekrit" then "EVIL HAX00R! U CANNOT HAVE MY SEEKRIT FILEZ!"
  else
    "FILE NOT FOUND 404"
  end

  # respond with the correct confirmation as per the HTTP spec (so Chrome doesn't complain)
  response = "HTTP/1.0 200 OK

<html>
  <head>
  <style>
    body {
     background-color: hotpink;
     font-family: Comic Sans MS;
    }
  </style>
  </head>
  <body>
     #{ content }
  </body>
</html>"

  client_connection.write( response )  # send the data back to the client

  # be neat and close the connection
  client_connection.close()

end # loop
