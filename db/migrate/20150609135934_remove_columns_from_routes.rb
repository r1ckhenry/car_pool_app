class RemoveColumnsFromRoutes < ActiveRecord::Migration
  def change
    remove_column :routes, :date, :date
    remove_column :routes, :start_location, :string
    remove_column :routes, :end_location, :string
  end
end
