import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const PressureChart = () => {
  const forecastData = useSelector((state) => state.forcast.list);
  if (!forecastData) {
    return null;
  }

  const labels = [];
  const seaLevelData = [];
  const groundLevelData = [];
  forecastData.forEach((forecast) => {
    labels.push(forecast.dt_txt);
    seaLevelData.push(forecast.main.sea_level);
    groundLevelData.push(forecast.main.grnd_level);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sea Level Pressure",
        data: seaLevelData,
        backgroundColor: "#3e95cd",
      },
      {
        label: "Ground Level Pressure",
        data: groundLevelData,
        backgroundColor: "#8e5ea2",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Chart type="bar" data={chartData} width={100} height={50} options={options} />
    </div>
  );
};

export default PressureChart;
