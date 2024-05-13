import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRegion } from "../features/counter/RegionSlice";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import Sales from "../Data/Sales";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueComparisonChart = () => {
  const [jsonData, setJsonData] = useState([]);
  const region = useSelector(selectRegion);

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

  const normalizeValue = (value) => {
    if (typeof value === "string" && value.includes("$")) {
      return parseFloat(value.replace(/[$,]/g, ""));
    } else {
      return value;
    }
  };

  const data = {
    labels: [...new Set(jsonData.map((item) => `${item.Region}`))],
    datasets: [
      {
        label: `Revenue ${region}`,
        data: jsonData.map((item) => normalizeValue(item.Revenue)),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: `Revenue PH ${region}`,
        data: jsonData.map((item) => normalizeValue(item["Revenue Per Hour"])),
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Revenue Comparison for ${region}`,
      },
    },
    scales: {
      x: {
        Ticks:{
          display:false
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.8,
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="text-lg font-semibold mb-2">
        <span>Revenue {region}</span> <span>Revenue PH {region}</span>
      </div>
      <div className="w-full max-w-4xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueComparisonChart;
