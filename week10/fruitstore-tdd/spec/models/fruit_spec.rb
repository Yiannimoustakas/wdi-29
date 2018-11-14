require 'rails_helper'

RSpec.describe Fruit, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  # it 'should belong to a shelf' do
  #   expect(Fruit).to belong_to(:shelf)
  # end
  it { should belong_to(:shelf) }


  describe 'A Pear' do

    before do
      @pear = Pear.create name: 'Nashi'
    end

    it 'should create a valid fruit object' do
      # set up test
      pear_retrieved = Pear.find( @pear.id )

      # test our expectations about behaviour
      expect( @pear ).to_not be_nil
      expect( pear_retrieved ).to eq @pear
    end

    it 'should remember its name' do
      expect( @pear.name ).to eq 'Nashi'
    end

    it 'should remember its class via Single Table Interitance' do
      pear = Fruit.find @pear.id

      expect( pear.class ).to eq Pear
      expect( pear.is_a?(Fruit) ).to eq true
      expect( pear.class.ancestors ).to include Fruit
    end

    it 'should be kind of squishy' do
      expect( @pear.squishy? ).to be true
    end


  end # Pear

end
