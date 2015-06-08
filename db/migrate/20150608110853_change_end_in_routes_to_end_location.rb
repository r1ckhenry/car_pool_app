class ChangeEndInRoutesToEndLocation < ActiveRecord::Migration
  def change
    rename_column :routes, :end, :end_location
    rename_column :routes, :start, :start_location
  end
end
