class DropTableOffers < ActiveRecord::Migration
  def change
    drop_table :offers
  end
end
