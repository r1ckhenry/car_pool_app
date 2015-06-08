require 'rails_helper'

describe Driver do
  
  it 'Driver should have a name' do 
    driver = Driver.new
    expect(driver.valid?).to eq false
  end

end
