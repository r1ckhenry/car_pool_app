function appendRouteToPage(response) {
  calcRoute(response.start_location, response.end_location);
  var routeOutput =  '<div class="route" data-id="'+ response.id +'"><i class="fa fa-compass"></i> ' + response.start_location + ' to ' + response.end_location + '</div>';
      routeOutput += '<small><i class="fa fa-calendar-o"></i> ' + response.date + '</small>';
      routeOutput += '<div class="name"><i class="fa fa-car"></i> ' + response.name + '</div>';
      routeOutput += '<div class="volume"><i class="fa fa-users"></i> ' + response.how_many + ' passengers: ' + response.passengers.forEach(function(e,i){}) + '</div>';
      routeOutput += '<div class="time"><i class="fa fa-clock-o"></i>  ' + response.est_time + ' hours</div>';
  $('#routeInfo .box-6 .route-info').html(routeOutput);
  var btnOutput = '<button id="add-passenger" class="btn prim-btn" data-id="' + response.id + '" data-method="update">Add passenger</button>';
      btnOutput += '<button id="cancel-jouney" class="btn alert-btn" data-id="' + response.id + '" data-method="delete">Cancel</button>';
  $('#routeInfo .box-4').html(btnOutput);
}

function addNewJourneyToListings(response) {
  var journeyListing = '<div class="journey-wrapper"></div>';
      journeyListing += '<div class="journey-wrapper"><div class="locations">';
      journeyListing += '<a class="journeyRouteShow" href="/drivers/' + response.id + '">' + response.start_location + ' to ' + response.end_location + '</a>';
      journeyListing += '<span class="float-right cost">£' + response.cost + '</span></div>';
      journeyListing += '<div class="date">' + response.date + '</div>';
      journeyListing += '<div class="driver-name">' + response.name + '</div></div>';
  $('.journey-listings').prepend(journeyListing);
}

// Shows the new form journey via AJAX request
function showNewJourney(e) {
  e.preventDefault();
  $('#newDriverForm').toggle();
  // $.ajax({
  //   type: 'GET',
  //   url: '/drivers/new'
  // }).done(function(response){
  //   console.log(response)
  //   var form = $('<div>' + response + '</div>').find("#new_driver");
  //   $('#rightViewInfo').html(form)
  // })
}

// Posts AJAX form to create a new journey
function postNewJourney(e) {
  e.preventDefault();
  var newDriverName = $('#driver_name').val();
  var newDriverDate = $('#driver_date').val();
  var newDriverStart = $('#driver_start_location').val();
  var newDriverEnd = $('#driver_end_location').val();
  var newDriverCost = $('#driver_cost').val();
  var newDriverHowMany = $('#driver_how_many').val();
  var newDriverEstTime = $('#driver_est_time').val();
  $.ajax({
    type: 'POST',
    url: '/drivers',
    dataType: 'json',
    data: {
          name: newDriverName,
          date: newDriverDate,
          start_location: newDriverStart,
          end_location: newDriverEnd,
          cost: newDriverCost,
          how_many: newDriverHowMany,
          est_time: newDriverEstTime
    }
  }).done(function(response){
    addNewJourneyToListings(response);
  })
}


// Show individual journey details
function showJourneyDetails(e) {
  e.preventDefault();
  $this = $(this);
  $.ajax({
    type: 'GET',
    url: $this.attr('href'),
    dataType: 'json'
  }).done(function(response){
    console.log(response.passengers)
    appendRouteToPage(response)
  });
}

// Delete journey from database Ajax
function deleteJourney(e) {
  var driverId = $(this).attr('data-id');
  $("[data-id='" + driverId + "']").remove();
  $.ajax({
    type: 'DELETE',
    url: '/drivers/' + driverId
  }).done(function(response){
    
  })
}

// Add passenger to journey
function addPassenger(e) {
  e.preventDefault();
  $('#addPassengerForm').toggle();
  var driverId = $(this).attr('data-id');
  $("#addMe").attr('data-id', driverId);
}

// Add passenger to database via AJAX
function addPassengerToJourney(e) {
  e.preventDefault();
  var newPassenger = $('#passengerName').val();
  var driverId = $(this).attr('data-id');
  $.ajax({
    type: 'POST',
    url: '/drivers/' + driverId + '/passengers',
    data: {
      name: newPassenger,
      driver_id: driverId
    }
  });
}


$(document).ready(function(){

  $('#newJourney').on('click', showNewJourney);
  $('#newDriverForm').on('click', '#newDriverSubmit', postNewJourney);
  $(".journey-listings").on('click', '.journeyRouteShow', showJourneyDetails);
  $("#routeInfo").on('click', '#cancel-jouney', deleteJourney);
  $("#routeInfo").on('click', '#add-passenger', addPassenger);
  $('#addMe').on('click', addPassengerToJourney);

});












