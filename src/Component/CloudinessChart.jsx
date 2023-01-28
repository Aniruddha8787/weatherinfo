import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const CloudinessChart = () => {
  const forecastData = useSelector((state) => state.forcast.list);
  if (!forecastData) {
    return null;
  }

  const labels = [];
  const cloudinessData = [];
  forecastData.forEach((forecast) => {
    labels.push(forecast.dt_txt);
    cloudinessData.push(forecast.clouds.all);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cloud Coverage (%)",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255,234,33,0.4)",
        borderColor: "rgba(255,234,33,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cloudinessData,
      },
    ],
  };
  return (
    <div>
      <Chart
        type="line"
        data={chartData}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                color: "white",
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
            x: {
              ticks: { color: "white" },
            },
          },
        }}
      />
    </div>
  );
};
export default CloudinessChart;
