'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw';

const options = {
  enableHighAccuracy: true
};

function setupMap(center, longitude, latitude) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const marker1 = new mapboxgl.Marker({color: '#ff7342'})
  .setLngLat([longitude, latitude])
  .addTo(map);
}

function getLocation(position) {
  let { latitude, longitude } = position.coords;

  setupMap([longitude, latitude], longitude, latitude);
}

function errorHandler() {
  return 'Unable to retrieve your location';
}

function displayPosition() {
  if('geolocation' in navigator) {
      navigator.geolocation.watchPosition(getLocation, errorHandler, options);
  } else {
      console.log('Geolocation is not supported by your browser');
  }
}

displayPosition();