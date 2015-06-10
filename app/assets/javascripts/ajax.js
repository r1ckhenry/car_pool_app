
// Shows the new form journey via AJAX request
function showNewJourney(e) {
  e.preventDefault();
  $.ajax({
    type: 'GET',
    url: '/drivers/new'
  }).done(function(response){
    var form = $($.parseHTML(response)).filter('#new_driver')
    $('#newDriverForm').html(form)
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
  }).done(function(data){
    $('.journey-listings').fadeOut().empty();
    var newJourney = $($.parseHTML(data)).filter('.journey-listings').html();  
    $('.journey-listings').html(newJourney).fadeIn();
  })
}











$(document).ready(function(){

  $('#newJourney').on('click', showNewJourney)
  $('#newDriverForm').on('click', '#newDriverSubmit', postNewJourney)

})