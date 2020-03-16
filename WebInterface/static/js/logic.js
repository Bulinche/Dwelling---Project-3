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
  WalkHeat: new L.LayerGroup()
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
    layers.WalkHeat
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

// Rail Stops

// d3.json("/rr", function (response) {
//   // console.log(response);

//   current_layer = "TrainStop"
//   var heatArray = [];
//   for (var i = 0; i < response.length; i++) {
//     var latitude = parseFloat(response[i].stop_lat);
//     var longitude = parseFloat(response[i].stop_lon);
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


// Bus Stops
// test = d3.json("/bstop")
// console.log(test)
// d3.json("/bstop", function (response) {
//   console.log(response);
//   current_layer = "BusStops"
//   var heatArray = [];
//   for (var i = 0; i < response.length; i++) {
//     var latitude = parseFloat(response[i].stop_lat);
//     var longitude = parseFloat(response[i].stop_lon);
//     if (latitude) {
//       L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]);
//       // heatArray.push([latitude, longitude]);
//     }
//   }
//   // var heat = L.heatLayer(heatArray, {
//   //   radius: 35,
//   //   blur: 3
//   // }).addTo(map);

// });


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


function walkHeat(multiplier) {
  d3.json("/walkScore", function (response) {
    // console.log(response);
    console.log(multiplier)
    layers.WalkHeat.clearLayers();
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

function init() {
      drawMunicipalities();

      CitySelect = d3.select("#City");
      CitySelect.on("change", function () {
        console.log(CitySelect.property("value"))

        var t = CitySelect.property("value");
        if (t == "Reset") {
          var coord = {
            'lat': "40.0583",
            'lon': "-74.4057"
          }
          map.flyTo(coord, 8);
        }
        else {
          var lat = t.split(",")[0];
          var lon = t.split(",")[1];
          var coord = {
            'lat': lat,
            'lon': lon
          }
          map.flyTo(coord, 13);

        }
      });
      walkSlider = d3.select("#Walkability")
      walkHeat(eval(walkSlider.property('value')))
    }

init();


  walkSlider1 = d3.select("#Walkability")
  walkSlider1.on("change", function () {
    walkHeat(eval(d3.select(this).property('value')))
  })