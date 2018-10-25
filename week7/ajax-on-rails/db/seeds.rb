
Dog.destroy_all

Dog.create name: 'Ruby',    age: 2, roundness: 5, image: 'http://placekitten.com/300/200'
Dog.create name: 'Jess',    age: 3, roundness: 4, image: 'http://placekitten.com/400/200'
Dog.create name: 'Rufus',   age: 4, roundness: 3, image: 'http://placekitten.com/400/300'
Dog.create name: 'Rex',     age: 5, roundness: 2, image: 'http://placekitten.com/200/100'
Dog.create name: 'Deirdre', age: 6, roundness: 1, image: 'http://placekitten.com/300/300'

puts "Created #{Dog.all.length} dogs."
