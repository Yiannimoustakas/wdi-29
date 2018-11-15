require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET #index' do

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

  describe 'POST to #create' do

    describe 'a fruit with valid information' do

      before do
        post :create, params: { fruit: { name: 'Strawberry' } }
      end

      it 'should increase the number of fruits in the database by 1' do
        expect( Fruit.count ).to eq 1
      end

      it 'should save the correct fruit name from the params to the DB' do
        expect( Fruit.first.name ).to eq 'Strawberry'
      end

      it 'should redirect to the show action for this fruit' do
        expect( response ).to redirect_to( Fruit.first )
        # A fruit object used here in a redirect context defaults
        # to giving the URL for the show page, i.e. fruits_path, /fruits/:id
      end

    end # valid

    describe 'a fruit with invalid information' do

      before do
        post :create, params: { fruit: { name: '' } }
      end

      it 'should not increase the number of fruits in the DB' do
        expect( Fruit.count ).to eq 0
      end

      it 'should rerender the #new template' do
        expect( response ).to render_template( :new )
      end

    end # invalid


  end # 'POST to #create'

end
