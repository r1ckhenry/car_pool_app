require 'rails_helper'

describe Route do
  
  it 'Route should have a date' do 
    route = Route.new 
    expect(route.valid?).to eq false
  end

  it 'Route should have a start location' do 
    route = Route.new(date: 2015/07/01)
    expect(route.valid?).to eq false
  end

  it 'Route should have an end location' do 
    route = Route.new(date: 2015/07/01, start_location: 'Edinburgh')
    expect(route.valid?).to eq false
  end

end
