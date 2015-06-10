class AddCostAndHowManyAndEstTimeToDrivers < ActiveRecord::Migration
  def change
    add_column :drivers, :cost, :integer
    add_column :drivers, :how_many, :integer
    add_column :drivers, :est_time, :integer
  end
end
