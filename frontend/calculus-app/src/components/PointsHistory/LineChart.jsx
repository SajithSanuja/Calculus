import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        data: data.map(d => d.points),
        borderColor: '#00bcd4',
        backgroundColor: '#00bcd4',
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 0,
        max: 70
      }
    }
  };

  return <Line data={chartData} options={options} />;
}; 