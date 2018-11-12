
User.destroy_all
Flight.destroy_all
Reservation.destroy_all
Plane.destroy_all

u1 = User.create name: 'Test User 1', email: 'one@one.com', password: 'chicken'
u2 = User.create name: 'Test User 2', email: 'two@two.com', password: 'chicken'
u3 = User.create name: 'Test User 3', email: 'three@three.com', password: 'chicken'

puts "Created #{ User.all.length} users."

p1 = Plane.create name: '737', rows: 40, cols: 6
p2 = Plane.create name: 'A330', rows: 80, cols: 8

puts "Created #{ Plane.all.length} planes."

f1 = Flight.create flight_number: '256', departure_date: '2018-11-23 4:20', origin: 'SYD', destination: 'SIN', plane: p1
f2 = Flight.create flight_number: '512', departure_date: '2018-12-25 11:20', origin: 'SYD', destination: 'SIN', plane: p2
f3 = Flight.create flight_number: '1024', departure_date: '2018-12-30 12:20', origin: 'SIN', destination: 'SFO', plane: p2

puts "Created #{Flight.all.length} flights."

r1 = Reservation.create flight: f1, user: u1, row: 10, col: 2
r2 = Reservation.create flight: f1, user: u2, row: 10, col: 3
r3 = Reservation.create flight: f1, user: u3, row: 10, col: 4
r4 = Reservation.create flight: f2, user: u3, row: 20, col: 2

puts "Created #{Reservation.all.length} reservations."


puts "Associations: "
puts "Plane #2 has #{Plane.second.flights.length} flights (should be 2)."
puts "Flight #1 has #{Flight.first.reservations.length} reservations (should be 3)."
puts "User #3 has #{User.third.reservations.length} reservations (should be 2)."
