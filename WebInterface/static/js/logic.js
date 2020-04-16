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
      onEachFeature: function (a, b) {
        b.on('click', function () {
          var coord = {
            'lat': a.geometry.coordinates[0][0][1],
            'lon': a.geometry.coordinates[0][0][0]
          }
          map.flyTo(coord, 12);
          addMarkers(parseInt(a.properties.MUN_CODE));
        })
        b.bindPopup(`<H3>${a.properties.NAME}</H3><BR><H4>MUNID:${a.properties.MUN_CODE}</H4>`)
      }

    }).addTo(layers["Munis"]);

  });
}


//***************************************
//   INSERT MARKERS WITH POPUPS
//***************************************

function addMarkers(searchMuni) {
  // console.log(searchMuni)
  // clearMarkers();
  clearHeatMaps()



  searchURL = `/bs/${searchMuni}`;
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

  searchURL = `/rrs/${searchMuni}`;
  console.log(searchURL)
  d3.json(searchURL, function (error, reT) {
    if (error) return console.info(error);
    console.log(reT)
    current_layer = "TrainStop";
    for (var i = 0; i < reT.length; i++) {
      var latitude = parseFloat(reT[i].stop_lat);
      var longitude = parseFloat(reT[i].stop_lon);
      if (latitude) {
        L.marker([latitude, longitude], { icon: icons[current_layer] }).addTo(layers[current_layer]).bindPopup("Stop: " + reT[i].stop_name);
      }
    }
  });

  searchURL = `/hs/${searchMuni}`;
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
//       POPULATE TABLE
//***************************************
function drawTable(data) {
  console.log("Here")
  console.log(data.length)
  var dt = d3.select("#DwellingTable");
  dt.html("");
  var newTable = dt.append("table").attr("class", "table table-striped table-hover").attr("id", "Dwelling-Ranking");
  var newtHead = newTable.append("thead");
  var theadrow = newtHead.append("tr");
  theadrow.append("th").attr("class", "table-head").text("Municipality");
  theadrow.append("th").attr("class", "table-head").text("County");
  theadrow.append("th").attr("class", "table-head").text("Municipality ID");
  theadrow.append("th").attr("class", "table-head").text("Latitude");
  theadrow.append("th").attr("class", "table-head").text("Longitude");
  theadrow.append("th").attr("class", "table-head").text("Education");
  theadrow.append("th").attr("class", "table-head").text("Transit");
  theadrow.append("th").attr("class", "table-head").text("Walkability");
  theadrow.append("th").attr("class", "table-head").text("Safety");
  theadrow.append("th").attr("class", "table-head").text("Activities");
  theadrow.append("th").attr("class", "table-head").text("DwellScore");
  var tbody = newTable.append("tbody");


  var sortedList = data.sort((a, b) => (a.DwellScore < b.DwellScore) ? 1 : -1);
  console.log(sortedList.length)
  var count = 0;
  sortedList.forEach(function (value) {
    if(count<30){
    var row = tbody.append("tr")
    row.append("th").text(value.Municipalty)
    row.append("td").text(value.County)
    row.append("td").text(value.MUNID)
    row.append("td").text(value.Latitude)
    row.append("td").text(value.Longitude)
    row.append("td").text(value.Education)
    row.append("td").text(value.Transit)
    row.append("td").text(value.Walkability)
    row.append("td").text(value.Safety)
    row.append("td").text(value.Activities)
    row.append("td").text(value.DwellScore)
    count+=1;
    }
  })
}



//***************************************
//   SCALE HEATMAP INTENSITY FUNCTION
//***************************************
function scaleIntensity(val, mult) {
  switch (parseInt(mult)) {
    case 0:
      return 0;
    case 1:
      return (val - 25) * mult;
    case 2:
      return (val - 50) * mult;
    case 3:
      return (val - 75) * mult;
    case 4:
      return (val - 100) * mult;
    case 5:
      return (val - 125) * mult;
    case 6:
      return (val - 150) * mult;
    case 7:
      return (val - 175) * mult;
    case 8:
      return (val - 200) * mult
    case 9:
      return (val - 225) * mult;
    case 10:
      return (val - 250) * mult;
    default:
      return 0;
  }

}


//***************************************
//       DRAW HEATMAPS FUNCTION
//***************************************
function drawHeatMaps() {
  clearHeatMaps()
  var walkMult = d3.select("#Walkability").property('value')
  var eduMult = d3.select("#Education").property('value')
  var safeMult = d3.select("#Safety").property('value')
  var actMult = d3.select("#Activities").property('value')
  var tranMult = d3.select("#Transportation").property('value')
  var blur = 5
  var dataTable = [];
  var total = scaleIntensity(500, walkMult) + scaleIntensity(500, eduMult) + scaleIntensity(500, safeMult) + scaleIntensity(500, actMult) + scaleIntensity(500, tranMult)
  console.warn(total)
  if (total > 0) {

    d3.json("/heat", function (response) {
      var heatArray = [];
      for (var i = 0; i < response.length; i++) {
        var latitude = parseFloat(response[i].Latitude);
        var longitude = parseFloat(response[i].Longitude);
        var curMuni = ""
        var intensity = (scaleIntensity(parseFloat(response[i].WalkScore), walkMult) + scaleIntensity(parseFloat(response[i].EDUScore), eduMult) + scaleIntensity(parseFloat(response[i].CrimeScore), safeMult) + scaleIntensity(parseFloat(response[i].ActivityScore), actMult) + scaleIntensity(parseFloat(response[i].TransitScore), tranMult));

        if (latitude) {
          heatArray.push([latitude, longitude, intensity]);
        }
        curMuni = {
          "Municipalty": response[i].Municipality,
          "County": response[i].County,
          "MUNID": response[i].MUNID,
          "Latitude": latitude,
          "Longitude": longitude,
          "Education": response[i].EDUScore,
          "Transit": response[i].TransitScore,
          "Walkability": response[i].WalkScore,
          "Safety": response[i].CrimeScore,
          "Activities": response[i].ActivityScore,
          "DwellScore": intensity
        }
        // console.log(curMuni)
        dataTable.push(curMuni)
      }
      var heat = L.heatLayer(heatArray, {
        radius: 2 * blur,
        blur: 3 * blur
      });
      heat.addTo(layers.DwellHeat);
      drawTable(dataTable)
    })
  }
  else {
    var dt = d3.select("#DwellingTable");
    dt.html("");
    var newTable = dt.append("table").attr("class", "table table-striped table-hover").attr("id", "Dwelling-Ranking");
    var newtHead = newTable.append("thead");
    var theadrow = newtHead.append("tr");
    theadrow.append("th").attr("class", "table-head").text("Munucipality");
    theadrow.append("th").attr("class", "table-head").text("County");
    theadrow.append("th").attr("class", "table-head").text("Municipality ID");
    theadrow.append("th").attr("class", "table-head").text("Latitude");
    theadrow.append("th").attr("class", "table-head").text("Longitude");
    theadrow.append("th").attr("class", "table-head").text("Education");
    theadrow.append("th").attr("class", "table-head").text("Transit");
    theadrow.append("th").attr("class", "table-head").text("Walkability");
    theadrow.append("th").attr("class", "table-head").text("Safety");
    theadrow.append("th").attr("class", "table-head").text("Activities");
    theadrow.append("th").attr("class", "table-head").text("DwellScore");
    dt.append("span").text("Please adjust the sliders to get your Top 30 results")
  }
}

//***************************************
//       Populate all of the sliders
//***************************************
function populateSliders() {
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
d3.select("#resetMap")
  .on("click", function () {
    clearMarkers();
    var coord = {
      'lat': "40.0583",
      'lon': "-74.4057"
    }
    map.flyTo(coord, 8);
    drawHeatMaps()
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

//***************************************
// RESET THE MAP TO ORIGINAL ZOOM
//***************************************
