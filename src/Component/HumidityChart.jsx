import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const HumidityChart = () => {
  const forecastData = useSelector((state) => state.forcast.list);
  if (!forecastData) {
    return null;
  }

  const labels = [];
  const humidityData = [];
  forecastData.forEach((forecast) => {
    labels.push(forecast.dt_txt);
    humidityData.push(forecast.main.humidity);
  });
const colorss = [
  "rgba(255, 99, 132, 0.4)",
  "rgba(173,231,146, 0.4)",
  "rgba(154,208,245, 0.4)",
  "rgba(255,234,33, 0.4)",
  "rgba(204,1,91, 0.4)",
];
  const bb = [
    "rgba(255, 99, 132, 1)",
    "rgba(173,231,146, 1)",
    "rgba(154,208,245, 1)",
    "rgba(255,234,33, 1)",
    "rgba(204,1,91, 1)",
  ];
  const chartData = {
    labels,
    datasets: [
      {
        data: humidityData,
        backgroundColor: colorss,
        borderColor: bb,
        borderWidth: 1,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div>
      <Chart
        type="polarArea"
        data={chartData}
        width={100}
        height={50}
        options={{
          scale: {
            angleLines: {
              color: "rgba(0, 0, 0, 0.2)",
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0.05)",
              circular: true,
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 20,
            },
          },
        }}
      />
    </div>
  );
};


export default HumidityChart;
