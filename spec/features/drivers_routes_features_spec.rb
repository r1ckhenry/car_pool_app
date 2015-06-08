require 'rails_helper'

describe "adding, showing, editing and deleting a driver" do
  
  it "driver can be added" do 
    visit '/'
    click_link('Add a journey')
    fill_in 'driver[name]', with: 'Rick Henry'
    click_button 'Submit'

    expect(page).to have_content 'Rick Henry'
  end

  it "should be able to add a route" do
    visit '/routes/new'
    fill_in 'Date', with: '2016/01/01'
    fill_in 'Start Location', with: 'Edinburgh'
    fill_in 'End Location', with: 'London'
    click_button 'add journey'

    expect(page).to have_content '2016/01/01'
  end

end

