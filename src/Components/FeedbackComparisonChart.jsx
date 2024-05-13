import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRegion } from "../features/counter/RegionSlice";
import Sales from "../Data/Sales";

import { Bar } from "react-chartjs-2";

const FeedbackComparisonChart = () => {
  const region = useSelector(selectRegion);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const filteredData =
      region === "All Region"
        ? Sales.Data
        : Sales.Data.filter((item) => item.Region === region);
    setJsonData(filteredData);
  }, [region]);

  useEffect(() => {
    setJsonData(Sales.Data);
  }, []);
  const data = {
    labels:jsonData.map((item)=>item.Salesman),
    datasets: [
      {
        label: "Negative",
        data: jsonData.map((item) => item.Positive),
        backgroundColor: "purple",
      },
      {
        label: "Positive",
        data: jsonData.map((item) =>item.Negative),
        backgroundColor: "yellow",
      },
      {
        label: "Total",
        data: jsonData.map((item) =>item.Total),
        
        backgroundColor: "lavender",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        display:false,
      },
      y: {
        stacked: true,
        display:false,
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between">
        <span className="mr-2">Feedback for {region}</span>
        <span className="flex gap-3">
          <p className="flex items-center">
            <span className="h-3 w-3 bg-purple-500 mr-1"></span> Negative
          </p>
          <p className="flex items-center">
            <span className="h-3 w-3 bg-yellow-600 mr-1"></span> Positive
          </p>
        </span>
      </div>
      <div>
      <div>
      <Bar data={data} options={options} />
    </div>
      </div>
    </div>
  );
};

export default FeedbackComparisonChart;
