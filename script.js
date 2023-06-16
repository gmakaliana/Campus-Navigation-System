// Set the Mapbox access token
mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW4wMTEiLCJhIjoiY2xmaWwyeWdwMG9yMzN2cnM0YzY0amxzbyJ9.LJ07zcJETilspFo9RJxteA";

let map; // Variable to hold the map object

// Get the current geolocation of the device
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

// Function called when geolocation is successfully retrieved
function successLocation(position) {
  // Set up the map with the current location as the center
  setupMap([position.coords.longitude, position.coords.latitude]);

  // Create a new marker
  const marker = new mapboxgl.Marker({
    color: "red",
    opacity: 0.8,
    size: 10,
  });

  // Set the marker's position to the current location
  marker.setLngLat([position.coords.longitude, position.coords.latitude]);

  // Add the marker to the map
  marker.addTo(map);
}

// Function called when geolocation retrieval encounters an error
function errorLocation() {
  // Set up the map with default coordinates
  setupMap([27.7206302, -29.4512856]);
}

// Function to set up the map
function setupMap(center) {
  // Create a new map object
  map = new mapboxgl.Map({
    container: "map", // HTML element with the id "map" will contain the map
    style: "//styles/kevin011/clig8zxtk007401pf3djg2iv9", // Mapbox style URL
    center: center, // Center the map at the specified coordinates
    zoom: 15, // Initial zoom level
  });

  // Add navigation controls (zoom buttons) to the map
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  // Create a MapboxDirections control for displaying directions
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  // Add the directions control to the top-left corner of the map
  map.addControl(directions, "top-left");
}
