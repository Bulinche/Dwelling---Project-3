console.log("Entered: " + railStop[0])

// Creating map object
var map = L.map("map", {
  center: [40.0583, -74.4057],
  zoom: 8
});

//Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

//  var link = "static/data/NewJersey.geojson";
// // // Our style object
//  var mapStyle = {
//   color: "white",
//    fillColor: "blue",
//   fillOpacity: 0.5,
//    weight: 1.5
//  };
//Grabbing our GeoJSON data..
//d3.json(link, function(data) {
//   // Creating a geoJSON layer with the retrieved data
 // L.geoJson(data, {
//     // Passing in our style object
 //    style: mapStyle
 //  }).addTo(map); });

//  // Rail Stops
// var linkHighSchool = "static/data/Rail_stops.json";
// d3.json(linkHighSchool, function(response) {
//   console.log(response);
//   for (var i = 0; i < response.length; i++) {
//     var latitude = parseFloat(response[i].stop_lat);
//     var longitude = parseFloat(response[i].stop_lon);
//     if (latitude) {
//       L.marker([latitude, longitude]).addTo(map);
//     }
//   }})

// var linkHighSchool = "static/data/Rail_stops.json";
// d3.json(linkHighSchool, function(response) {
//   console.log(response);
//   var heatArray = [];
//   for (var i = 0; i < response.length; i++) {
//     var latitude = parseFloat(response[i].stop_lat);
//     var longitude = parseFloat(response[i].stop_lon);
//     if (latitude) {
//       heatArray.push([latitude, longitude]);
//     }
//   }
//   var heat = L.heatLayer(heatArray, {
//     radius: 35,
//     blur: 3
//   }).addTo(map);

// })
// ;

// High School
var linkHighSchool = "static/data/SchoolRankings/SchoolsData/high_school_df.json";
d3.json(linkHighSchool, function(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].Latitude);
    var longitude = parseFloat(response[i].longitude);
    if (latitude) {
      L.marker([latitude, longitude]).addTo(map);
    }
  }})

var linkHighSchool = "static/data/SchoolRankings/SchoolsData/high_school_df.json";
d3.json(linkHighSchool, function(response) {
  console.log(response);
  var heatArray = [];
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].Latitude);
    var longitude = parseFloat(response[i].longitude);
    if (latitude) {
      heatArray.push([latitude, longitude]);
    }
  }
  var heat = L.heatLayer(heatArray, {
    radius: 35,
    blur: 3
  }).addTo(map);

})
;

//High School Markers
function createMarkers(response) {

  // Pull the "stations" property off of response.data
  var stations = response.data.stations;

  // Initialize an array to hold bike markers
  var bikeMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < stations.length; index++) {
    var station = stations[index];

    // For each station, create a marker and bind a popup with the station's name
    var bikeMarker = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "<h3>");

    // Add the marker to the bikeMarkers array
    bikeMarkers.push(bikeMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(bikeMarkers));
}


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);
