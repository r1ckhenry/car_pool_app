require 'rails_helper'

describe Driver do
  
  it 'Driver should have a name' do 
    driver = Driver.new
    expect(driver.valid?).to eq false
  end

  it 'Route should have a date' do 
    route = Driver.new(name: 'Rick Henry') 
    expect(route.valid?).to eq false
  end

  it 'Route should have a start location' do 
    route = Driver.new(date: 2015/07/01)
    expect(route.valid?).to eq false
  end

  it 'Route should have an end location' do 
    route = Driver.new(date: 2015/07/01, start_location: 'Edinburgh')
    expect(route.valid?).to eq false
  end

end
