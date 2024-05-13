import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import MarketingData from "../Data/Marketing.json";

const AnalyticsMain = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(MarketingData.Google);
  }, []);

  const dates = jsonData.map(entry => entry.DATE);
  const directData = jsonData.map(entry => entry.DIRECT);
  const organicData = jsonData.map(entry => entry.ORGANIC);
  const referralData = jsonData.map(entry => entry.REFERRAL);
  const paidData = jsonData.map(entry => entry.PAID);
  const otherData = jsonData.map(entry => entry.OTHER);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Direct',
        data: directData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Organic',
        data: organicData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Referral',
        data: referralData,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Paid',
        data: paidData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Other',
        data: otherData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: 'white', // Set the color of the ticks to white
        },
      },
    },
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 style={{ color: 'white' }}>Google Analytics</h1>
        <button>Main source last 30 days</button>
      </div>
      <div>
        
        <ul className='flex justify-between'>
          <li>Direct</li>
          <li>Organic</li>
          <li>REFERRAL</li>
          <li>PAID</li>
          
        </ul>
        
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AnalyticsMain;












