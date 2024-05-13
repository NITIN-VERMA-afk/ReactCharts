import React, { useState, useEffect } from "react";
import MarketingData from "../Data/Marketing.json";

const EmailMarketingCampane = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(MarketingData.Email);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1>Email Marketing</h1>
        <button className="bg-gray-500 p-1 rounded">Recent Campains</button>
      </div>
      <table
        className="table-auto w-full border-collapse border"
        style={{ maxWidth: "100%" }}
      >
        <thead>
          <tr>
            <th className="border px-4 py-2">CAMPAIGN</th>
            <th className="border px-4 py-2">SENT</th>
            <th className="border px-4 py-2">OPENS</th>
            <th className="border px-4 py-2">CLICKS</th>
            <th className="border px-4 py-2">BOUNCES</th>
            <th className="border px-4 py-2">UNSUBS</th>
          </tr>
        </thead>
        <tbody>
        {jsonData.length > 0 && jsonData.map((campaign) => (
  <tr key={campaign.CAMPAIGN}>
    <td className="border ">{campaign.CAMPAIGN}</td>
    <td className="border px-4 py-2">{campaign.SENT}</td>
    <td className="border px-4 py-2">{campaign.OPENS}</td>
    <td className="border px-4 py-2">{campaign.CLICKS}</td>
    <td className="border px-4 py-2">{campaign.BOUNCES}</td>
    <td className="border px-4 py-2">{campaign.UNSUBS}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailMarketingCampane;

