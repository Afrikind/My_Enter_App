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

  const updateData = () => {
    const newData = {
      ...data, 
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], 
      datasets: [
        ...data.datasets, 
        {
          label: 'New Dataset',
          data: [2000, 1800, 2200, 2500, 2700, 3000, 2800, 2900], 
          fill: false,
          borderColor: 'rgb(128, 0, 128)',
          tension: 0.1,
        },
      ],
    };

    setData(newData); 
  };
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
  }

  return (
    <div>
      <h2>Fitness Tracking</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <button onClick={updateData}>Update Data</button> 
    </div>
  );
};
export default FitnessTracking;