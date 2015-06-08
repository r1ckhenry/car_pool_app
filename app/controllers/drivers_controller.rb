class DriversController < ApplicationController
  
  def index
    @drivers = Driver.all
  end

  def new 
    @driver = Driver.new
  end

  def create
    driver = Driver.new name: params[:driver].permit(:name)

    if driver.save
      redirect_to driver_path
    else

    end
  end

  def show 
    @driver = Driver.find(params[:id])
  end

end
