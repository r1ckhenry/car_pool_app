class Route < ActiveRecord::Base
  belongs_to :driver
  has_many :offers

  validates :date, presence: true
  validates :start_location, presence: true
  validates :end_location, presence: true

end
