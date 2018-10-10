class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image
      t.integer :roundness
      t.text :bio

      t.timestamps  # gives us 'date_created' and 'date_modified' date fields
    end
  end
end
