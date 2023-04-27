import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const FitnessTracking = () => {
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Steps',
        data: [1500, 2000, 1800, 2500, 2800, 3200, 3000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Calories Burned',
        data: [100, 150, 200, 180, 220, 250, 230],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Distance',
        data: [1.5, 2.0, 1.8, 2.5, 2.8, 3.2, 3.0],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  });

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Fitness Tracking</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FitnessTracking;
