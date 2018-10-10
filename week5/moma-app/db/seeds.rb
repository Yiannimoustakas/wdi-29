# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Fights' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# t.text :name
# t.text :nationality
# t.date :dob
# t.text :period
# t.text :image
# t.integer :roundness
# t.text :bio

Artist.destroy_all   # remove all rows from the artists table before we seed

puts "Creating artists..."

a1 = Artist.create name: 'Lee Krasner', nationality: 'USA', dob: '1908/10/27', period: '20th Century', roundness: 4, bio: 'Abstract expressionist', image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg'

a2 = Artist.create name: 'Frantisek Kupka', nationality: 'Czech', dob: '1871/09/23', period: '20th Century', roundness: 7, bio: 'Vorticist/Abstract', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg'

a3 = Artist.create name: 'Max Ernst', nationality: 'German', dob: '1891/04/02', period: '20th Century', roundness: 7, bio: 'German surrealist', image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg'

puts "Created #{ Artist.all.length } artists: "
puts Artist.pluck(:name).join(', ')


Work.destroy_all
puts "Creating works..."

# Kupka
Work.create title: 'Movement', year: '1946/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tresbohemes.com/wp-content/uploads/2016/04/Kupka-Movement.jpg', artist_id: a2.id

# Krasner 1
Work.create title: 'Gothic Landscape', year: '1961/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.tate.org.uk/art/images/work/T/T03/T03291_10.jpg', artist_id: a1.id

# Krasner 2
Work.create title: 'Working Model', year: '1957/01/01', medium: 'bronze sculpture', style: 'modernism', image: 'http://www.tate.org.uk/art/images/work/T/T00/T00390_10.jpg', artist: a1  # short way of linking to belongs_to model

# Ernst 1
Work.create title: 'City with Animals', year: '1930/01/01', medium: 'oil on wood', style: 'surrealism/cubism', image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870', artist: a3

# Ernst 2
Work.create title: 'Die Versuchung des heiligen Antonius', year: '1946/01/01', medium: 'oil on canvas', style: 'surrealism', image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg', artist: a3

puts "Created #{Work.all.length} works:"
puts Work.pluck(:title).join(', ')
