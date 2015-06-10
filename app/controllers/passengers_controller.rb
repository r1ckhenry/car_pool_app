class PassengersController < ApplicationController

  def new
    @passenger = Passenger.new 
    @driver = Driver.find(params[:driver_id])
  end

  def create
    driver = Driver.find(params[:driver_id])
    driver.passengers << Passenger.create(passenger_params)

    redirect_to driver_path(driver)
  end 


private
  def passenger_params  
    params.require(:passenger).permit(:name)
  end

end
