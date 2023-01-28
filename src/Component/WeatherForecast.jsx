import React from "react";
import { useSelector } from "react-redux";
import {  Chart } from "react-chartjs-2";
import "chart.js/auto";

const ForecastChart = () => {
  const forecastData = useSelector((state) => state.forcast.list);
  const labels = [];
  const tempData = [];
  if (!forecastData) {
    return null;
  }
  forecastData.forEach((forecast) => {
    labels.push(forecast.dt_txt);
    tempData.push(forecast.main.temp);
  });
  const colorss = [
    "rgba(255, 99, 132, 0.7)",
    "rgba(173,231,146, 0.7)",
    "rgba(154,208,245, 0.7)",
    "rgba(255,234,33, 0.7)",
    "rgba(20,1,91, 0.7)",
  ];
  const bb = [
    "rgba(255, 99, 132, 1)",
    "rgba(173,231,146, 1)",
    "rgba(154,208,245, 1)",
    "rgba(255,234,33, 1)",
    "rgba(20,1,91, 1)",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (Celsius)",
        backgroundColor: colorss,
        borderColor: bb,
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: tempData,
      },
    ],
  };
  return (
    <div style={{ color: "white" }}>
      {Object.keys(chartData).length > 0 && (
        <Chart
          type="bar"
          data={chartData}
          width={100}
          height={50}
          options={
            {scales: {
              y: {
                ticks: { color: "white", beginAtZero: true },
              },
              x: {
                ticks: { color: "white" },
              },
            },}
          }
        />
      )}
    </div>
  );
};

export default ForecastChart;
