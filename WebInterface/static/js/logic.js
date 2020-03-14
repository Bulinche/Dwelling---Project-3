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

 var link = "static/data/NewJersey.geojson";
// // // Our style object
 var mapStyle = {
  color: "white",
   fillColor: "pink",
  fillOpacity: 0.5,
   weight: 1.5
 };
//Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
 layouts = L.geoJson(data, {
    // Passing in our style object
    style: mapStyle
  }).addTo(map); });


 // Rail Stops

CitySelect = d3.select("#City")
CitySelect.on("change", function(){
  console.log(CitySelect.property("value"))
  // console.log(this.value)
  var t = CitySelect.property("value");
  var lat = t.split(",")[0];
  var lon = t.split(",")[1];
  var coord = {
    'lat' : lat,
    'lon': lon
  }
  map.flyTo(coord,13);
  // map.fitBounds(CitySelect.property("value"));
})

var RailStopIcon = new L.Icon({
  iconUrl: 'static/img/Icons/TrainIcon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 20],
  iconAnchor: [2,2],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// var linkRailStops = "static/data/Rail_stops.json";
d3.json("/rr", function(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].stop_lat);
    var longitude = parseFloat(response[i].stop_lon);
    if (latitude) {
      L.marker([latitude, longitude], {icon: RailStopIcon}).addTo(map);
    }
  }})

// var linkRailStops = "static/data/Rail_stops.json";
d3.json("/rr", function(response) {
  console.log(response);
  var heatArray = [];
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].stop_lat);
    var longitude = parseFloat(response[i].stop_lon);
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


// Bus Stops

var BusStopIcon = new L.Icon({
  iconUrl: 'static/img/Icons/BusIcon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var linkBusStops = "static/data/Bus - Stops - json.csv";
d3.json(linkBusStops, function(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].stop_lat);
    var longitude = parseFloat(response[i].stop_lon);
    if (latitude) {
      L.marker([latitude, longitude], {icon: BusStopIcon}).addTo(map);
    }
  }})

var linkBusStops = "static/data/Bus - Stops - json.csv";
d3.json(linkBusStops, function(response) {
  console.log(response);
  var heatArray = [];
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].stop_lat);
    var longitude = parseFloat(response[i].stop_lon);
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









// High School

var highSchoolIcon = new L.Icon({
  iconUrl: 'static/img/Icons/SchoolsIcon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [20, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// var linkHighSchool = "static/data/SchoolRankings/SchoolsData/high_school_df.json";
d3.json("/hs", function(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var latitude = parseFloat(response[i].Latitude);
    var longitude = parseFloat(response[i].longitude);
    if (latitude) {
      L.marker([latitude, longitude], {icon: highSchoolIcon}).addTo(map);
    }
  }})

// var linkHighSchool = "static/data/SchoolRankings/SchoolsData/high_school_df.json";
d3.json("/hs", function(response) {
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
