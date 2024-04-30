import React, { useState } from 'react';
import LocationInput from './LocationInput';
import MapDisplay from './MapDisplay';
import FarePrediction from './FarePrediction';
import LiveReports from './LiveReports';
import LineChartDisplay from './LineChartDisplay';
import './App.css';

function App() {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [averageData, setAverageData] = useState([]);

  const handleLocationsSelected = (from, to) => {
    setFromLocation(from);
    setToLocation(to);
  };

  const handleNewAverage = (average) => {
    setAverageData(prevData => [...prevData, average]);
  };

  return (
    <div className="App">
      <h1>FairFare - NYC Taxi Fare Predictor</h1>
      <LocationInput onLocationsSelected={handleLocationsSelected} />
      {/* <MapDisplay from={fromLocation} to={toLocation} /> */}
      {/* <FarePrediction /> */}
      <LiveReports onNewAverage={handleNewAverage} />
      {averageData.length > 0 && <LineChartDisplay data={averageData} />}
    </div>
  );
}

export default App;
