//Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  TrainStop: new L.LayerGroup(),
  Schools: new L.LayerGroup(),
  BusStops: new L.LayerGroup(),
  Houses: new L.LayerGroup(),
  Munis: new L.LayerGroup(),
  WalkHeat: new L.LayerGroup(),
  TravelHeat: new L.LayerGroup()
};

// Creating map object
var map = L.map("map", {
  center: [40.0583, -74.4057],
  zoom: 8,
  layers: [
    layers.TrainStop,
    layers.Schools,
    layers.BusStops,
    layers.Houses,
    layers.Munis,
    layers.WalkHeat,
    layers.TravelHeat
  ]
});


// Add our 'streetmap' tile layer to the map
streetmap.addTo(map);


// Create an overlays object to add to the layer control
var overlays = {
  "Train Stops": layers.TrainStop,
  "Schools": layers.Schools,
  "Bus Stops": layers.BusStops,
  "Houses": layers.Houses,
  "Municipalities": layers.Munis
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);



// Initialize an object containing icons for each layer group
var icons = {
  TrainStop: L.ExtraMarkers.icon({
    icon: "ion-android-train",
    iconColor: "white",
    markerColor: "yellow",
    shape: "square"
  }),
  Schools: L.ExtraMarkers.icon({
    icon: "ion-university",
    iconColor: "white",
    markerColor: "red",
    shape: "star"
  }),
  BusStops: L.ExtraMarkers.icon({
    icon: "ion-android-bus",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  Houses: L.ExtraMarkers.icon({
    icon: "ion-ios-home",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  })
};


// Change coordinates based on the selected dropdown value

function drawMunicipalities() {
  // Our style object
  var mapStyle = {
    color: "black",
    fillColor: "grey",
    fillOpacity: 0.2,
    weight: 1.5
  };

  //Grabbing our GeoJSON data..
  d3.json("static/data/NewJersey.geojson", function (data) {

    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {

      // Passing in our style object
      style: mapStyle

    }).addTo(layers["Munis"]);

  });
}

function clearHeatMaps(){
  layers.TravelHeat.clearLayers();
  layers.WalkHeat.clearLayers();

}

function addMarkers(searchCity) {
  clearMarkers();
  clearHeatMaps()

  searchURL = `/bs/${searchCity}`;
  d3.json(searchURL, function (response) {
    current_layer = "BusStops";
    for (var i = 0; i < response.length; i++) {
      var latitude = parseFloat(response[i].stop_lat);
      var longitude = parseFloat(response[i].stop_lon);
      if (latitude) {
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]);
      }
    }
  });

  searchURL = `/rrs/${searchCity}`;
  d3.json(searchURL, function (response) {
    current_layer = "TrainStop";
    for (var i = 0; i < response.length; i++) {
      var latitude = parseFloat(response[i].stop_lat);
      var longitude = parseFloat(response[i].stop_lon);
      if (latitude) {
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]);
      }
    }
  });

  searchURL = `/hsm/${searchCity}`;
  d3.json(searchURL, function (response) {
    current_layer = "Schools";
    for (var i = 0; i < response.length; i++) {
      var latitude = parseFloat(response[i].Latitude);
      var longitude = parseFloat(response[i].longitude);
      if (latitude) {
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]);
      }
    }
  });
}


// High School

// d3.json("/hs", function (response) {
//   // console.log(response);
//   current_layer = "Schools"
//   var heatArray = [];
//   for (var i = 0; i < response.length; i++) {
//     var latitude = parseFloat(response[i].Latitude);
//     var longitude = parseFloat(response[i].longitude);
//     if (latitude) {
//       // heatArray.push([latitude, longitude]);
//       L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]);
//     }
//   }
//   // var heat = L.heatLayer(heatArray, {
//   //   radius: 35,
//   //   blur: 3
//   // }).addTo(map);

// });

//***************************************
//         Clear All Markers
//***************************************
function clearMarkers() {
  layers.TrainStop.clearLayers();
  layers.Schools.clearLayers();
  layers.BusStops.clearLayers();
}


//***************************************
//           WALK HEATMAP LAYER
//***************************************
function walkHeat(multiplier) {
  layers.WalkHeat.clearLayers();

  d3.json("/walkScore", function (response) {
    if (multiplier != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = parseFloat(response[i].Walkability) * multiplier;
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * multiplier,
        blur: 3 * multiplier
      });
      heat.addTo(layers.WalkHeat);
    }
  })
}

//***************************************
//        TRAVEL HEATMAP LAYER
//***************************************
function travelHeat(multiplier) {
  layers.TravelHeat.clearLayers();

  d3.json("/rr", function (response) {

    if (multiplier != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = multiplier;
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * multiplier,
        blur: 3 * multiplier
      });
      heat.addTo(layers.TravelHeat);
    }
  })

  d3.json("/bstop", function (response) {
    var heatArray = [];
    for (var i = 0; i < response.length; i++) {
      var latitude = parseFloat(response[i].stop_lat);
      var longitude = parseFloat(response[i].stop_lon);
      var intensity = multiplier;
      if (latitude) {
        heatArray.push([latitude, longitude, intensity]);
      }
    }
    var heat = L.heatLayer(heatArray, {
      radius: 2 * multiplier,
      blur: 3 * multiplier
    });
    heat.addTo(layers.TravelHeat);
  })
}

//***************************************
//       Initialize Function
//***************************************
function init() {
  drawMunicipalities();

  walkSlider1 = d3.select("#Walkability")
  walkHeat(eval(walkSlider1.property('value')))

  travelSlider1 = d3.select("#Transportation")
  travelHeat(eval(travelSlider1.property('value')))
}

init();


d3.select("#Walkability")
  .on("change", function () {
    walkHeat(eval(d3.select(this).property('value')))
  })

d3.select("#Transportation")
  .on("change", function () {
    travelHeat(eval(d3.select(this).property('value')))
  })

CitySelect = d3.select("#City");
CitySelect.on("change", function () {
  currentCity = d3.select('#City option:checked').text();

  var t = CitySelect.property("value");
  if (t == "Reset") {
    var coord = {
      'lat': "40.0583",
      'lon': "-74.4057"
    }
    map.flyTo(coord, 8);
    clearMarkers();

    walkSlider1 = d3.select("#Walkability")
    walkHeat(eval(walkSlider1.property('value')))

    travelSlider1 = d3.select("#Transportation")
    travelHeat(eval(travelSlider1.property('value')))
  }
  else {
    var lat = t.split(",")[0];
    var lon = t.split(",")[1];
    var coord = {
      'lat': lat,
      'lon': lon
    }
    map.flyTo(coord, 13);
    addMarkers(currentCity);

  }
});

resetPress = d3.select("#zoomOut");
resetPress.on("click", function () {
  clearMarkers();
  var coord = {
    'lat': "40.0583",
    'lon': "-74.4057"
  }
  map.flyTo(coord, 8);
  var sel = document.getElementById('City');
  sel.selectedIndex = 0;
  walkSlider1 = d3.select("#Walkability")
  walkHeat(eval(walkSlider1.property('value')))

  travelSlider1 = d3.select("#Transportation")
  travelHeat(eval(travelSlider1.property('value')))
});