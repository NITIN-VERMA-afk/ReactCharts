import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import MarketingData from "../Data/Marketing.json"

const AnalyticsSeasions = () => {

  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(MarketingData.Google);
  }, []);
  const dates = jsonData.map((entry) => entry.DATE);
  const directData = jsonData.map((entry) => entry.DIRECT);
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Direct",
        data: directData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        // display: false, 
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        // display: false, 
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1>Google anylitics</h1>
        <button>Seasions last 30 days</button>
      </div>
      <div className="flex justify-center">Sessions</div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AnalyticsSeasions;
