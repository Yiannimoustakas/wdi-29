class Genre < ApplicationRecord
  has_and_belongs_to_many :songs # many-to-many association with songs

  has_many :artists, through: 'songs'
end
