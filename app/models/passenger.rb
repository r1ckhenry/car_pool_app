class Passenger < ActiveRecord::Base

  has_many :driver_passengers
  has_many :drivers, through: :driver_passengers

  validates :name, presence: true

end
