class DriverPassenger < ActiveRecord::Base
  belongs_to :driver
  belongs_to :passenger

end
