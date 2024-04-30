import React, { useState, useEffect } from 'react';

function LiveReports({ onNewAverage }) {
  const [reports, setReports] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          // Calculate average and reset textarea and reports
          console.log("Hello World");
          if (reports.length > 0) {
            const average = reports.reduce((a, b) => a + b, 0) / reports.length;
            onNewAverage(average);
          }
          setTextAreaValue("");
          setReports([]);
          return 10;  // Reset timer to 60 seconds
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [reports, onNewAverage]);

  const handleReportInput = (event) => {
    const newReports = event.target.value.split('\n').map(parseFloat).filter(num => !isNaN(num));
    setReports(newReports);
    setTextAreaValue(event.target.value);
  };

  return (
    <div>
      <h3>Live Reported Fares</h3>
      <div>Time remaining: {timer} seconds</div>
      <textarea value={textAreaValue} onChange={handleReportInput} placeholder="Enter fare values, one per line." />
    </div>
  );
}

export default LiveReports;
