require 'rails_helper'

describe "adding, showing, editing and deleting a driver" do

  before do
    d1 = Driver.create(name: 'Rick Henry',date: '2015/07/01', start_location: 'Edinburgh', end_location: 'London')
  end
  
  it "driver and route can be added" do 
    visit '/'
    click_link('Add a journey')
    fill_in 'driver[name]', with: 'Rick Henry'
    fill_in 'driver[date]', with: '2016/01/01'
    fill_in 'driver[start_location]', with: 'Edinburgh'
    fill_in 'driver[end_location]', with: 'London'
    click_button 'Submit'
    wait_for_ajax

    expect(page).to have_content 'Edinburgh'
  end

  it 'should be viewed and edited' do
    visit drivers_path
    click_link 'Rick Henry'
    click_link 'Edit this journey'
    fill_in 'driver[start_location]', with: 'Glasgow'
    click_button 'Update'

    expect(page).to have_content 'Glasgow'
  end

  it 'journey can be cancelled' do
    visit drivers_path
    click_link 'Rick Henry'
    click_link 'Cancel this journey'

    expect(page).to have_no_content('Rick Henry')
  end

end

