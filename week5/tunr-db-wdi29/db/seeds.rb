
Song.destroy_all

s1 = Song.create title: 'Achy Breaky Heart'
s2 = Song.create title: 'Have a Safe Trip, Dear'
s3 = Song.create title: 'Burn the Witch'
s4 = Song.create title: 'Identikit'
s5 = Song.create title: 'Rollerblade Success Story'
s6 = Song.create title: 'No One Gives a Hoot About Faux-Ass Nonsense'
s7 = Song.create title: 'Sail to the Moon'

puts "Created #{Song.all.length} songs."


Artist.destroy_all

a1 = Artist.create name: 'Billy Ray Cyrus'
a2 = Artist.create name: 'June of 44'
a3 = Artist.create name: 'Radiohead'
a4 = Artist.create name: 'Don Caballero'

puts "Created #{Artist.all.length} artists."

# Song -> Artist associations:
# Billy
a1.songs << s1
# June of 44
a2.songs << s2
# Radiohead
a3.songs << s3 << s4 << s7  # Add these three songs to the artist's songs
# Don Cab
a4.songs << s5 << s6


Album.destroy_all

al1 = Album.create title: 'Some Gave All', year: '1992'
al2 = Album.create title: 'Engine Takes to the Water', year: '1998'
al3 = Album.create title: 'A Moon-Shaped Pool', year: '2015'
al4 = Album.create title: 'II', year: '1992'
al5 = Album.create title: 'Hail to the Thief', year: '1999'

puts "Created #{Album.all.length} albums."

# Song -> Album associations
al1.songs << s1
al2.songs << s2
al3.songs << s3 << s4  # The album 'A Moon Shaped Pool' has the Songs 'Burn the Witch' AND 'Identikit'
al4.songs << s5 << s6
al5.songs << s7

Genre.destroy_all

g1 = Genre.create name: 'Nautical Rock'
g2 = Genre.create name: 'Math Rock'
g3 = Genre.create name: 'Paranoid Art-Rock'
g4 = Genre.create name: 'Instrumental'
g5 = Genre.create name: 'IDM'
g6 = Genre.create name: 'Country'
g7 = Genre.create name: 'Sadcore'

puts "Created #{Genre.all.length} genres."

# Associations between Songs and Genres
# This is a many-to-many association, so each genre can have many songs,
# and each song can be in more than one genre
s1.genres << g6
s2.genres << g1 << g2  # This song has two genres that apply to it
s3.genres << g3 << g7
s4.genres << g3 << g7 << g5
s5.genres << g4 << g2
s6.genres << g4 << g3
s7.genres << g3 << g7 << g5


Mixtape.destroy_all

m1 = Mixtape.create name: 'Driving Songs'
m2 = Mixtape.create name: 'Make-out Music'
m3 = Mixtape.create name: 'Code Jams'

puts "Created #{Mixtape.all.length} mixtapes."

m1.songs << s1 << s2 << s3 << s4 << s5 << s6 << s7
m2.songs << s2 << s4 << s6
m3.songs << s7 << s1 << s2

User.destroy_all

u1 = User.create name: 'Luke',  email: 'luke@ga.co', password: 'chicken'
u2 = User.create name: 'Linna', email: 'linna@ga.co', password: 'chicken'
u3 = User.create name: 'Mikki', email: 'mikaela@ga.co', password: 'chicken'

puts "Created #{User.all.length} users."

u1.mixtapes << m1 << m2
u2.mixtapes << m3
