class Artist < ApplicationRecord
  has_many :songs
  has_many :albums, through: 'songs'  # a through association: get to the albums of an artist via their songs, and from the other end: get the artist and album belongs to via the songs
  has_many :genres, through: 'songs'
end
