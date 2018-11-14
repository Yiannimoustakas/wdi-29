require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  before do
    3.times{ |i| Fruit.create name: "Fruit number #{i}" }
  end

  describe 'GET #index in HTML format' do

    before do
      get :index
    end

    it 'returns http success' do
      expect( response ).to have_http_status( 200 )
    end

    it 'should render the index template' do
      expect( response).to render_template( :index )
    end

    it 'should assign the instance variable @fruits which contains all the fruits' do
      expect( assigns(:fruits) ).to be
      expect( assigns(:fruits).length ).to eq 3
    end

    it 'should assign @fruits the fruits from the DB in reverse order' do
      expect( assigns(:fruits).first.name ).to eq 'Fruit number 2'
    end

  end # 'GET #index in HTML'

  describe 'GET #index in JSON format' do

    before do
      get :index, format: 'json'
    end

    it 'should return HTTP success' do
      expect( response ).to have_http_status( 200 )
    end

    it 'should provide the name of the fruits in the JSON response' do
      fruits = JSON.parse( response.body )
      expect( fruits.length ).to eq 3
      expect( fruits.first['name'] ).to eq 'Fruit number 2'
    end


  end # 'GET #index in JSON format'

end
