import React, { useState } from 'react';
import axios from 'axios';

function LocationInput({ onLocationsSelected }) {
  const [fromLat, setFromLat] = useState('');
  const [fromLng, setFromLng] = useState('');
  const [toLat, setToLat] = useState('');
  const [toLng, setToLng] = useState('');

  const handlePredictClick = () => {
    // Log the coordinates as a dummy API call
    console.log(`From Coordinates: Latitude ${fromLat}, Longitude ${fromLng}`);
    console.log(`To Coordinates: Latitude ${toLat}, Longitude ${toLng}`);

    const requestBody = {
        "VendorID": 4,
        "passenger_count": 1,
        "trip_distance": 3.013,
        "RatecodeID": 1.0,
        "mta_tax": 0.5,
        "tolls_amount": 0.0,
        "airport_fee": 0.0,
        "pickup_longitude": -73.981352,
        "pickup_latitude": 40.773906,
        "dropoff_longitude": -73.945830,
        "dropoff_latitude": 40.776534,
        "pickup_day": 12,
        "pickup_weekday": 3,
        "pickup_hour": 10,
        "mid_night_trip": 0,
        "rush_hour_trip": 0,
        "pickup_manhattan": 1,
        "pickup_jfk": 0,
        "pickup_brooklyn": 0,
        "pickup_bronx": 0,
        "pickup_laGuardia": 0,
        "drop_manhattan": 1,
        "drop_jfk": 0,
        "drop_brooklyn": 0,
        "drop_bronx": 0,
        "drop_laGuardia": 0
    }
    axios.post('http://172.22.144.1:5000/predict', requestBody)
            .then(response => {
                console.log("Result", response)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    // Optionally, pass these coordinates up to a parent component if needed
    onLocationsSelected({ fromLat, fromLng }, { toLat, toLng });
    
  };

  return (
    <div>
      <h2>Enter Locations</h2>
      <input
        type="text"
        value={fromLat}
        onChange={(e) => setFromLat(e.target.value)}
        placeholder="From Latitude"
      />
      <input
        type="text"
        value={fromLng}
        onChange={(e) => setFromLng(e.target.value)}
        placeholder="From Longitude"
      />
      <input
        type="text"
        value={toLat}
        onChange={(e) => setToLat(e.target.value)}
        placeholder="To Latitude"
      />
      <input
        type="text"
        value={toLng}
        onChange={(e) => setToLng(e.target.value)}
        placeholder="To Longitude"
      />
      <button onClick={handlePredictClick}>Predict</button>
    </div>
  );
}

export default LocationInput;
