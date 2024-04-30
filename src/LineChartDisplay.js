import React from 'react';
import { Line as LineJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

export default function LineChartDisplay({ data }) {
  const chartData = {
    labels: data.map((_, i) => i + 1),
    datasets: [{
      label: 'Average Fare Over Time',
      data: data,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return <Line data={chartData} />;
}
