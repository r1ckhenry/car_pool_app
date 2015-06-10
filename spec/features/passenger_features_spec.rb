require 'rails_helper'

describe "adding, removing and editing a passenger" do

  before do
    d1 = Driver.create(name: 'Rick Henry', date: '2015/07/01', start_location: 'Edinburgh', end_location: 'London')
  end

  it 'should be able to add a passenger' do
    visit '/'
    click_link 'Rick Henry'
    click_link "Add passenger"
    fill_in 'Name', with: 'Jon Henry'
    click_button 'submit'

    expect(page).to have_content 'Jon Henry'
  end
  
end