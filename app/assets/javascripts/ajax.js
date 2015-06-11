function appendRouteToPage(response) {
  calcRoute(response.start_location, response.end_location);
  var routeOutput =  '<div class="route" data-id="'+ response.id +'">' + response.start_location + ' to ' + response.end_location + '</div>';
      routeOutput += '<small>' + response.date + '</small>';
      routeOutput += '<div class="name">' + response.name + '</div>';
      routeOutput += '<div class="volume"><b>Can take:</b> ' + response.how_many + ' passengers</div>';
      routeOutput += '<div class="time"><b>Estimated journey time:</b> ' + response.est_time + ' hours</div>';
  $('#routeInfo .box-6 .route-info').html(routeOutput);
  var btnOutput = '<button id="cancel-jouney" data-id="' + response.id + '" data-method="delete">Cancel</button>';
      btnOutput += '<button id="add-passenger" data-id="' + response.id + '" data-method="delete">Add passenger</button>';
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
    url: $this.attr('href')
  }).done(function(response){
    appendRouteToPage(response)
  });
}

// Delete journey from database Ajax
function deleteJourney(e) {
  var driverId = $(this).attr('data-id');
  console.log(driverId);
  $.ajax({
    type: 'DELETE',
    url: '/drivers/' + driverId
  }).done(function(response){
    console.log(response);
  })
}

$(document).ready(function(){

  $('#newJourney').on('click', showNewJourney);
  $('#newDriverForm').on('click', '#newDriverSubmit', postNewJourney);
  $(".journey-listings").on('click', '.journeyRouteShow', showJourneyDetails);
  $("#routeInfo").on('click', '#cancel-jouney', deleteJourney);

});












