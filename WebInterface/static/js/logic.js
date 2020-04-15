//Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
});

var satmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
});

var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var outmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.outdoors",
    accessToken: API_KEY
});

var satstrmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-satellite",
    accessToken: API_KEY
});

var wheatmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.wheatpaste",
    accessToken: API_KEY
});

var strbasicmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
});

var comicmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.comic",
    accessToken: API_KEY
});

var pencilmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.pencil",
    accessToken: API_KEY
});

var piratesmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.pirates",
    accessToken: API_KEY
});

var emeraldmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.emerald",
    accessToken: API_KEY
});

var highcmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.high-contrast",
    accessToken: API_KEY
});


// baseMaps
var baseMaps = {
    "Street Map": streetmap,
    "Satellite": satmap,
    "Light Map": lightmap,
    "Dark Map": darkmap,
    "Outdoors": outmap,
    "Wheatpaste": wheatmap,
    "Street Basic": strbasicmap,
    "Comic": comicmap,
    "Pencil": pencilmap,
    "Pirate": piratesmap,
    "Emerald": emeraldmap,
    "High-Contrast": highcmap
};


// Initialize all of the LayerGroups we'll be using
var layers = {
  TrainStop: new L.LayerGroup(),
  Schools: new L.LayerGroup(),
  BusStops: new L.LayerGroup(),
  Houses: new L.LayerGroup(),
  Munis: new L.LayerGroup(),
  // WalkHeat: new L.LayerGroup(),
  // TravelHeat: new L.LayerGroup(),
  // HSHeat: new L.LayerGroup(),
  // ActHeat: new L.LayerGroup(),
  // SafeHeat: new L.LayerGroup(),
  DwellHeat: new L.LayerGroup()
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
    // layers.WalkHeat,
    // layers.TravelHeat,
    // layers.HSHeat,
    // layers.ActHeat,
    // layers.SafeHeat,
    layers.DwellHeat
  ]
});


// Add our 'streetmap' tile layer to the map
highcmap.addTo(map);


// Create an overlays object to add to the layer control
var overlays = {
  "Train Stops": layers.TrainStop,
  "Schools": layers.Schools,
  "Bus Stops": layers.BusStops,
  "Houses": layers.Houses,
  "Municipalities": layers.Munis
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(baseMaps, overlays).addTo(map);



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




//***************************************
// DRAW MUNICIPALITIES WITH CLICK LINKS
//***************************************

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
      style: mapStyle,
      onEachFeature: function(a,b){
        b.on('click',function(){
          console.log(a.geometry.coordinates[0][0])
        })
        b.bindPopup(a.properties.NAME)
      }

    }).addTo(layers["Munis"]);

  });
}


//***************************************
//   INSERT MARKERS WITH POPUPS
//***************************************

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
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]).bindPopup("Stop: " + response[i].stop_name);
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
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]).bindPopup("Stop: " + response[i].stop_name);
      }
    }
  });

  searchURL = `/hsm/2019/${searchCity}`;
  d3.json(searchURL, function (response) {
    current_layer = "Schools";
    for (var i = 0; i < response.length; i++) {
      var latitude = parseFloat(response[i].Latitude);
      var longitude = parseFloat(response[i].Longitude);
      if (latitude) {
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]).bindPopup("School: " + response[i].School + "<BR />Rank: " + response[i].Rank);
      }
    }
  });
}

//***************************************
//         CLEAR MAP FUNCTIONS
//***************************************
function clearMarkers() {
  layers.TrainStop.clearLayers();
  layers.Schools.clearLayers();
  layers.BusStops.clearLayers();
}

function clearHeatMaps() {
  // layers.TravelHeat.clearLayers();
  // layers.WalkHeat.clearLayers();
  // layers.HSHeat.clearLayers();
  // layers.ActHeat.clearLayers();
  // layers.SafeHeat.clearLayers();
  layers.DwellHeat.clearLayers();

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
//      Activities HEATMAP LAYER
//***************************************
function actHeat(multiplier) {
  layers.WalkHeat.clearLayers();

  d3.json("/actScore", function (response) {
    if (multiplier != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var coord= response[i].latlng
        var latitude = coord.split(',')[0];
        var longitude = coord.split(',')[1];
        var intensity = parseFloat(response[i].activityScore) * multiplier;
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * multiplier,
        blur: 3 * multiplier
      });
      heat.addTo(layers.ActHeat);
    }
  })
}

//***************************************
//           CRIME HEATMAP LAYER
//***************************************
function safeHeat(multiplier) {
  layers.SafeHeat.clearLayers();

  d3.json("/crimeScore", function (response) {
    if (multiplier != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = parseFloat(response[i]["2018"]) * multiplier;
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * multiplier,
        blur: 3 * multiplier
      });
      heat.addTo(layers.SafeHeat);
    }
  })
}

//***************************************
//        EDUCATION HEATMAP LAYER
//***************************************
function hsHeat(multiplier) {
  layers.HSHeat.clearLayers();

  d3.json("/eduScore", function (response) {
    if (multiplier != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = parseFloat(response[i].EduScore) * multiplier;
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * multiplier,
        blur: 3 * multiplier
      });
      heat.addTo(layers.HSHeat);
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
//   SCALE HEATMAP INTENSITY FUNCTION
//***************************************
function scaleIntensity(val, mult){
  switch(mult){
    case 0:
      return val;
    case 1:
      return (val-25)*mult;
    case 2:
      return (val-50)*mult;
    case 3:
      return (val-75) * mult;
    case 4:
      return (val - 100) * mult;
    case 5:
      return (val - 125)*mult;
    case 6:
      return (val-150)*mult;
    case 7:
      return (val-175)*mult;
    case 8:
      return (val-200)*mult
    case 9:
      return (val-225)*mult;
    case 10:
      return (val-250) * mult;
    default:
      return val;
  } 

}


//***************************************
//       DRAW HEATMAPS FUNCTION
//***************************************
function drawHeatMaps() {
  // walkSlider1 = d3.select("#Walkability")
  // walkHeat(eval(walkSlider1.property('value')))

  // travelSlider1 = d3.select("#Transportation")
  // travelHeat(eval(travelSlider1.property('value')))

  // hsSlider1 = d3.select("#Education")
  // hsHeat(eval(hsSlider1.property('value')))

  // actSlider1 = d3.select("#Activities")
  // actHeat(eval(actSlider1.property('value')))

  // safeSlider1 = d3.select("#Safety")
  // safeHeat(eval(safeSlider1.property('value')))

  var walkMult = d3.select("#Walkability").property('value')
  var eduMult = d3.select("#Education").property('value')
  var safeMult = d3.select("#Safety").property('value')
  var actMult = d3.select("#Activities").property('value')

  // var total = 500 * (walkMult + eduMult + safeMult + actMult)

  d3.json("/walkScore", function (response) {
    if (walkMult != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = scaleIntensity(parseFloat(response[i].Walkability),walkMult);
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * walkMult,
        blur: 3 * walkMult
      });
      heat.addTo(layers.DwellHeat);
    }
  })

  d3.json("/actScore", function (response) {
    if (actMult != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var coord= response[i].latlng
        var latitude = coord.split(',')[0];
        var longitude = coord.split(',')[1];
        var intensity = scaleIntensity(parseFloat(response[i].activityScore),actMult);
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * actMult,
        blur: 3 * actMult
      });
      heat.addTo(layers.DwellHeat);
    }
  })

  d3.json("/eduScore", function (response) {
    if (eduMult != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = scaleIntensity(parseFloat(response[i].EduScore),eduMult);
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * eduMult,
        blur: 3 * eduMult
      });
      heat.addTo(layers.DwellHeat);
    }
  })

  d3.json("/crimeScore", function (response) {
    if (safeMult != 0) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var intensity = scaleIntensity(parseFloat(response[i]["2018"]), safeMult);
        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * safeMult,
        blur: 3 * safeMult
      });
      heat.addTo(layers.DwellHeat);
    }
  })

}

//***************************************
//       Populate all of the sliders
//***************************************
function populateSliders(){
  d3.select("#eduVal").text("5")
  d3.select("#transpoVal").text("5")
  d3.select("#walkVal").text("5")
  d3.select("#safeVal").text("5")
  d3.select("#actVal").text("5")
}

//***************************************
//       INITIALIZE FUNCTION
//***************************************
function init() {
  clearMarkers();
  clearHeatMaps();
  var coord = {
    'lat': "40.0583",
    'lon': "-74.4057"
  }
  map.flyTo(coord, 8);
  // var sel = document.getElementById('City');
  // sel.selectedIndex = 0;
  drawHeatMaps()
  populateSliders()
}

drawMunicipalities();
init();


//***************************************
//       ON CHANGE FUNCTIONS
//***************************************

d3.select("#Walkability")
  .on("change", function () {
    d3.select("#walkVal").text(eval(d3.select(this).property('value')))
    // walkHeat(eval(d3.select(this).property('value')))
  })

d3.select("#Transportation")
  .on("change", function () {
    d3.select("#transpoVal").text(eval(d3.select(this).property('value')))
    // travelHeat(eval(d3.select(this).property('value')))
  })
d3.select("#Education")
  .on("change", function () {
    d3.select("#eduVal").text(eval(d3.select(this).property('value')))
    // hsHeat(eval(d3.select(this).property('value')))
  })
d3.select("#Safety")
  .on("change", function () {
    d3.select("#safeVal").text(eval(d3.select(this).property('value')))
    // hsHeat(eval(d3.select(this).property('value')))
  })

d3.select("#Activities")
.on("change", function () {
  d3.select("#actVal").text(eval(d3.select(this).property('value')))
  // hsHeat(eval(d3.select(this).property('value')))
})


d3.select("#DwellMe")
.on("click", function () {
  clearHeatMaps();
  // d3.select("#actVal").text(eval(d3.select(this).property('value')))
  // walkHeat(eval(d3.select("#Walkability").property('value')))
  // hsHeat(eval(d3.select("#Education").property('value')))
  // travelHeat(eval(d3.select("#Transportation").property('value')))
  // actHeat(eval(d3.select("#Activities").property('value')))
  // safeHeat(eval(d3.select("#Safety").property('value')))
  drawHeatMaps();
})

// CitySelect = d3.select("#City");
// CitySelect.on("change", function () {
//   currentCity = d3.select('#City option:checked').text();

//   var t = CitySelect.property("value");
//   if (t == "Reset") {
//     init()
//   }
//   else {
//     var lat = t.split(",")[0];
//     var lon = t.split(",")[1];
//     var coord = {
//       'lat': lat,
//       'lon': lon
//     }
//     map.flyTo(coord, 13);
//     addMarkers(currentCity);

//   }
// });

// resetPress = d3.select("#zoomOut");
// resetPress.on("click", function () {
//   init();
// });