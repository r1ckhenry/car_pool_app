class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :passenger_id
      t.integer :driver_id
      t.date :date
      t.string :start
      t.string :end

      t.timestamps null: false
    end
  end
end
