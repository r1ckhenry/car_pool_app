require 'rails_helper'

describe Passenger do

  it 'should have a name' do 
    passenger = Passenger.new
    expect(passenger.valid?).to eq false
  end

end
