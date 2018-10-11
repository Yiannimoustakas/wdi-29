class Album < ApplicationRecord
  has_many :songs

  # this is weird: it seems like it should be that an album 'belongs_to' an artist,
  # but because this is an association through 'songs', and an album has many
  # songs, it's also has_many to get from the album to the artist(s)
  has_many :artists, through: 'songs'

  def artist
      # self is the keyword to talk about "the current object", i.e.:
      # al = Album.first
      # al.artist   # 'self' will be the object 'al'
      self.artists.uniq
  end


end
