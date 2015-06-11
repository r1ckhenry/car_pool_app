class DriversController < ApplicationController
  
  def index
    @drivers = Driver.all.order(created_at: :desc)
    @driver = Driver.new
    puts params
  end

  def new 
    @driver = Driver.new
  end

  def create
    driver = Driver.create(journey_create_params)

    if driver.save
      respond_to do |format|
        format.html
        format.json { render json: driver, status: 200 }
      end
    else
      render 'new'
    end
  end

  def show 
    @driver = Driver.find(params[:id])
    render json: @driver
  end

  def edit
    @driver = Driver.find(params[:id])
    # code here for variable with info you need in edit form

    respond_to do |format|
      format.html
      format.json { render json: {key: value, key: value} }
    end
  end

  def update
    driver = Driver.find(params[:id])
    driver.update(driver_params)

    redirect_to driver_path(driver)
  end

  def destroy
    driver = Driver.find(params[:id])
    driver.destroy

    redirect_to root_path
  end

  private

    def driver_params
      params[:driver].permit(:name, :date, :start_location, :end_location)
    end

    def journey_create_params
      params.permit(:name, :date, :start_location, :end_location, :cost, :how_many, :est_time)
    end

end
