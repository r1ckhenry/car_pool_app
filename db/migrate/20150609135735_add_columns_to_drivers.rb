class AddColumnsToDrivers < ActiveRecord::Migration
  def change
    add_column :drivers, :date, :date
    add_column :drivers, :start_location, :string
    add_column :drivers, :end_location, :string
  end
end
