class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.integer :route_id
      t.integer :passenger_id
      t.boolean :status

      t.timestamps null: false
    end
  end
end
