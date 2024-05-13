import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRegion } from "../features/counter/RegionSlice";
import Sales from "../Data/Sales";

const DataTable_1 = () => {
  const region = useSelector(selectRegion);
  const [error, setError] = useState(null);
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

  if (error) {
    return <div>Error loading the data: {error}</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Hours</th>
              <th className="border px-4 py-2">Sales</th>
              <th className="border px-4 py-2">Sales per hour</th>
              <th className="border px-4 py-2">Revenue</th>
              <th className="border px-4 py-2">Revenue per Hour</th>
              <th className="border px-4 py-2">Calls</th>
              <th className="border px-4 py-2">Excellent</th>
              <th className="border px-4 py-2">Good</th>
              <th className="border px-4 py-2">Fair</th>
              <th className="border px-4 py-2">Poor</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Client Satisfactions</th>
              <th className="border px-4 py-2">Positive</th>
              <th className="border px-4 py-2">Negative</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.Hours}</td>
                <td className="border px-4 py-2">{item.Sales}</td>
                <td className="border px-4 py-2">{item["Sales Per Hour"]}</td>
                <td className="border px-4 py-2">{item.Revenue}</td>
                <td className="border px-4 py-2">{item["Revenue Per Hour"]}</td>
                <td className="border px-4 py-2">{item.Calls}</td>
                <td className="border px-4 py-2">{item.Excellent}</td>
                <td className="border px-4 py-2">{item.Good}</td>
                <td className="border px-4 py-2">{item.Fair}</td>
                <td className="border px-4 py-2">{item.Poor}</td>
                <td className="border px-4 py-2">{item.Total}</td>
                <td className="border px-4 py-2">
                  {item["Client Satisfaction"]}
                </td>
                <td className="border px-4 py-2">{item.Positive}</td>
                <td className="border px-4 py-2">{item.Negative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable_1;
