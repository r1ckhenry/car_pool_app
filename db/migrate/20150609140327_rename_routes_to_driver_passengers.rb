class RenameRoutesToDriverPassengers < ActiveRecord::Migration
  def change
    rename_table :routes, :driver_passengers
  end
end
