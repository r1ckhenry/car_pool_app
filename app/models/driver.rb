class Driver < ActiveRecord::Base

  has_many :driver_passengers
  has_many :passengers, through: :driver_passengers

  # validates :name, presence: true
  # validates :date, presence: true
  # validates :cost, presence: true
  # validates :how_many, presence: true
  # validates :est_time, presence: true
  # validates :start_location, presence: true
  # validates :end_location, presence: true

end
