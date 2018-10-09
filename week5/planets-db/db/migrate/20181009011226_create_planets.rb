class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|

      # We automatically get an 'id' field from Rails, it's so essential

      t.string  :name
      t.text    :image
      t.float   :orbit
      t.float   :diameter
      t.float   :mass
      t.float   :temperature
      t.integer :moons

      # Creates two date columns: date_created, and date_modified
      t.timestamps

    end
  end
end
