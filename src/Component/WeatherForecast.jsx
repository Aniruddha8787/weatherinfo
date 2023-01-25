import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const WeatherForecast = () => {
  const forecastData = useSelector((state) => state.forcast.list);
  const [chartData, setChartData] = useState({
    labels: forecastData.map((item) => item.dt_txt),
    datasets: [
      {
        label: "Temperature (°C)",
        data: forecastData.map((item) => item.main.temp),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 40,
      },
    },
  });
    console.log("chartData", chartData);
  return (
    <div>
      {Object.keys(chartData).length > 0 && (
        <Bar data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default WeatherForecast;
