import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import MarketingData from "../Data/Marketing.json";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const Emailmarketingresult = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const parsedData = MarketingData["E-Subscribers"].map(item => ({
            DATE: item.DATE,
            SUBSCRIBED: parseInt(item.SUBSCRIBED.replace(",", ""), 10)
        }));
        setJsonData(parsedData);
    }, []);

    const chartData = {
        labels: jsonData.map(item => item.DATE),
        datasets: [
            {
                label: "Subscribed",
                data: jsonData.map(item => item.SUBSCRIBED),
                fill: false,
                borderColor: "aqua",
                pointBorderColor: "aqua",
                borderWidth: 2,
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
                
                display:false,
                
            },
        },
    };

    return (
        <div>
            <div className="flex justify-between">
                <h1>Email Marketing</h1>
                <button className="bg-gray-500 p-1 rounded">Result</button>
            </div>
            <div className="flex justify-center p-2">Subscribers</div>
            <div className="flex justify-center gap-6">
                <span>Vs Yesterday</span>
                <span>Vs Last Weak</span>
            </div>
            <div>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Emailmarketingresult;


