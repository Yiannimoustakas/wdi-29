require 'pry'


class SinglyLinkedList

  # if we have defined 'each' for our class, we can include
  # the Enumerable mixin, to get lots of array-like
  # iteration methods for free
  # This is 'interface abstraction'
  include Enumerable

  attr_accessor :head

  # The Node class can only be used from within
  # the SinglyLinkedList class
  class Node
    attr_accessor :value, :next
    def initialize( value )
      @value = value
      @next = nil
    end
  end # Node

  def initialize( value=nil )
    # Creates a new instance of the Node class, pass
    # the value argument down to it, and set the
    # new node it returns as the head of the list
    @head = Node.new( value ) if value
  end

  # same as array.unshift( value )
  def prepend( value )
    new_node = Node.new value
    new_node.next = @head
    @head = new_node
  end

  # same as array.push( value )
  def append( value )
    last.next = Node.new value
  end

  # return the last node in the list
  def last
    node = @head
    while node && node.next
      node = node.next  # i += 1
    end
    node
  end

  def to_s
    # Loop through each node in our list, starting
    # at the first (@head), adding the value of
    # each node to an output string, and following
    # the .next attribute to get to the next node
    # in the list for the next loop iteration,
    # until we're at the end of the list
    output = ''
    node = @head
    while node
      output += node.value + ', '
      node = node.next
    end
    output
  end

  # more efficient version of last(), or rather,
  # an instance variable which keeps track of the
  # last node in the list, so we don't need to
  # loop over the entire list to find the last node
  # (make sure to update it when you .append or
  # otherwise change the last item via another
  # method!)

  def at_index( n )
    # return Node object at position n in the list
    # same as array[n]

    # node = @head
    # n.times do
    #   node = node.next if node
    # end
    # node

    each{ |node, index| return node if index == n }

    # index = 0
    # while node
    #   return node if index == n
    #   node = node.next   # i++
    #   index += 1
    # end
    # nil
  end

  # use square bracket notation method as an alias
  # for at_index
  alias_method :[], :at_index

  def find( needle )
    # return Node object whose value == needle
    # node = @head
    # while node
    #   return node if node.value == needle
    #   node = node.next
    # end
    each{ |node| return node if node.value == needle }
  end

  def shift
    # removes the first Node of the list and returns
    # it (destructive, i.e. changes the list)
    old_head = @head
    @head = @head.next  # advance head to next item
    old_head.next = nil # break connection to list
    old_head
  end

  def insert_after( node, value )
    # insert a new node after the given node argument
    # (the new node should have the given value)
    new_node = Node.new value
    new_node.next = node.next
    node.next = new_node
  end

  def length
    # returns the length of the list
    # n = 0
    # node = @head
    # while node
    #   n += 1
    #   node = node.next
    # end
    n = 0
    each{ n += 1 }
    n
  end

  def reverse
    # returns a reversed version of the list,
    # without changing the original list
    # (non-destructive)
    # reversed = SinglyLinkedList.new
    # node = @head
    # # could also do
    # while node
    #   # take each node from the current list in
    #   # forward order, and prepend it to the new
    #   # list we are building - this has the effect
    #   # of reversing the list
    #   reversed.prepend node.value
    #   node = node.next
    # end
    # reversed

    reversed = SinglyLinkedList.new
    each{ |node| reversed.prepend node.value }
    reversed
  end

  def reverse!
    # destructive version: returns a reversed version
    # of the list, and sets the original list to be
    # the reversed version
    @head = reverse.head
  end

  # list.each do |node|
  #   puts node.value
  # end

  def each
    # takes a block, and runs the block for each
    # node in the list (i.e. the current node is
    # provided as a block variable/"goalpost" arg
    # to the block)
    # HINT: look up 'yield'
    return nil unless block_given?
    #
    # puts "before yield"
    # val = yield( "SOME ARGUMENT" )
    # puts "after yield: return from yield is #{val}"

    node = @head
    index = 0
    while node
      # run the block which was given to .each, and
      # pass in the current node and index to the block,
      # which will be avaialable as block ('goalpost')
      # variables, updated each iteration
      # i.e. list.each do |current_node, current_index|
      yield node, index
      node = node.next
      index += 1
    end

  end

  # bonus challenges for the showoffs: map, inject

  # def map
  #   return nil unless block_given?
  #   arr = []
  #   each{ |node| arr << yield(node) }
  #   arr
  # end


end # SinglyLinkedList

list = SinglyLinkedList.new 'Groucho'
list.prepend 'Chico'
list.prepend 'Harpo'

binding.pry
puts "Done."
