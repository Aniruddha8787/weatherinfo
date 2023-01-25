import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const [labels, setlabels] = useState([]);
  const [tempData, settempData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast/?q=Pune&cnt=5&appid=d4e579ab675b8ccb867f00a43babdb06&units=metric"
      );

      setlabels(res.data.list.map((item) => item.dt_txt));
      settempData(res.data.list.map((item) => item.main.temp));
    }
    getData();
  }, []);
  console.log("tempData :", tempData);
  console.log("lable :", labels);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: tempData,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  console.log("chartData: ", chartData);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
