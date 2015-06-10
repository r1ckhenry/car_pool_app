function appendRouteToPage(response) {
  calcRoute(response.start_location, response.end_location);
  var routeOutput =  '<div class="route">' + response.start_location + ' to ' + response.end_location + '</div>';
      routeOutput += '<small>' + response.date + '</small>';
      routeOutput += '<div class="name">' + response.name + '</div>';
      routeOutput += '<div class="volume"><b>Can take:</b> ' + response.how_many + ' passengers</div>';
      routeOutput += '<div class="time"><b>Estimated journey time:</b> ' + response.est_time + ' hours</div>';
  $('#routeInfo .box-6').html(routeOutput);
}



// Shows the new form journey via AJAX request
function showNewJourney(e) {
  e.preventDefault();
  $('#newDriverForm').toggleClass('slideInRight');
  $.ajax({
    type: 'GET',
    url: '/drivers/new'
  }).done(function(response){
    console.log(response)
    var form = $('<div>' + response + '</div>').find("#new_driver");
    $('#rightViewInfo').html(form)
  })
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
    console.log(response)
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

$(document).ready(function(){

  $('#newJourney').on('click', showNewJourney);
  $('#newDriverForm').on('click', '#newDriverSubmit', postNewJourney);
  $(".journey-listings").on('click', '.journeyRouteShow', showJourneyDetails);

});












