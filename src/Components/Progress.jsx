import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sales from "../Data/Sales";
import { selectRegion } from "../features/counter/RegionSlice"; 

ChartJS.register(ArcElement, Tooltip, Legend);

const Progress = () => {
  const region = useSelector(selectRegion);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const filteredData = region === "All Region"
      ? Sales.Data
      : Sales.Data.filter((item) => item.Region === region);
    setJsonData(filteredData);
  }, [region]);

  useEffect(() => {
    setJsonData(Sales.Data);
  }, []);

  const totalSatisfactionPercentage = () => {
    const totalSatisfaction = jsonData.reduce((acc, curr) => {
      return acc + parseFloat(curr["Client Satisfaction"]);
    }, 0);
    const averageSatisfaction = totalSatisfaction / jsonData.length;
    return averageSatisfaction * 100;
  };

  const data = {
    datasets: [
      {
        data: [totalSatisfactionPercentage(), 100 - totalSatisfactionPercentage()],
        backgroundColor: ["purple", "#e5e5e5"],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            return `${value.toFixed(1)}%`;
          },
        },
      },
    },
    cutout: "70%",
    rotation: -90,
    circumference: 360,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="flex items-center gap-5">
      <div>
        <span>Client satisfaction for {region}: {totalSatisfactionPercentage().toFixed(2)}%</span>
      </div>
      <div className="w-24">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Progress;

