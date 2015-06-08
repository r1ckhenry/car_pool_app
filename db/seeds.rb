# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Driver.delete_all
Passenger.delete_all
Route.delete_all

d1 = Driver.create(name: 'Rick Henry')
d2 = Driver.create(name: 'John Smith')
d3 = Driver.create(name: 'Martha King')

p1 = Passenger.create(name: 'Robert Brown')
p2 = Passenger.create(name: 'Campbell Smith')
p3 = Passenger.create(name: 'James Ogilvie')

r1 = Route.create(date: '2015/07/01', start_location: 'Edinburgh', end_location: 'London', passenger_id: p1.id, driver_id: d3.id)
r2 = Route.create(date: '2015/07/04', start_location: 'Birmingham', end_location: 'Paris', passenger_id: p2.id, driver_id: d2.id)
r3 = Route.create(date: '2015/07/08', start_location: 'Newcastle', end_location: 'Manchester', passenger_id: p3.id, driver_id: d1.id)