import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const LocationForm = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleFirstInputClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        reverseGeocode(latitude, longitude).then((address) => {
          setCurrentLocation(address);
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  const handleSecondInputClick = () => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 1,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(geolocate);

    map.on('load', () => {
      geolocate.trigger();
      map.on('geolocate', (e) => {
        const { lng, lat } = e.coords;
        reverseGeocode(lat, lng).then((address) => {
          setSelectedLocation(address);
        });
      });
    });
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      const address = data.features[0].place_name;
      return address;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="location-input-1">Current Location:</label>
        <input
          id="location-input-1"
          type="text"
          value={currentLocation}
          readOnly
          onClick={handleFirstInputClick}
        />
      </div>
      <div>
        <label htmlFor="location-input-2">Select Location:</label>
        <input
          id="location-input-2"
          type="text"
          value={selectedLocation}
          readOnly
          onClick={handleSecondInputClick}
        />
        <div id="map" style={{ width: '100%', height: '300px' }}></div>
      </div>
    </form>
  );
};

export default LocationForm;
