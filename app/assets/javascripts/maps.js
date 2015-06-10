// GOOGLE MAPS

var directionsDisplay, directionsService, map;

function initialize() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute(start, end) {
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}


function codeAddress() {
  // Get all the locations into an array
  var route = document.getElementsByClassName('locations');
  var routes = []

  for (var i = 0; i < route.length; i++) {
    routes.push({
                  'start': route[i].childNodes[1].innerHTML,
                  'end' : route[i].childNodes[3].innerHTML
                });
    console.log(routes);
  };


  console.log(routes);

  // routes.map(function(e,i) {
  //   console.log(e)
  // })
}



