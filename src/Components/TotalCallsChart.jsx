import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRegion } from "../features/counter/RegionSlice";
import Sales from "../Data/Sales";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const TotalCallsChart = () => {
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
    labels: jsonData.map((item) => item.Salesman),
    datasets: [
      {
        label: "Sales",
        data: jsonData.map((item) => item.Calls),
        backgroundColor: "purple",
      },
      {
        label: "Sales ph",
        data: jsonData.map((item) => item.Total),
        backgroundColor: "yellow",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between">
        <span className="mr-2">Total calls {region}</span>
        <span className="flex gap-3">
          <p className="flex items-center">
            <span className="h-3 w-3 bg-purple-500 mr-1"></span> Calls
          </p>
          <p className="flex items-center">
            <span className="h-3 w-3 bg-yellow-600 mr-1"></span> All feedback
          </p>
        </span>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalCallsChart;
