class PassengersController < ApplicationController

  def new
    @passenger = Passenger.new 
    @driver = Driver.find(params[:driver_id])
  end

  def create
    driver = Driver.find(params[:driver_id])
    driver.passengers << Passenger.create(name: params[:name])

    redirect_to root_path
  end 


private
  def passenger_params  
    params.require(:passenger).permit(:name)
  end

end
