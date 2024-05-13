import React from "react";
import RegionButtons from "../Components/RegionButtons";
import Progress from "../Components/Progress";
import DataTable_1 from "../Components/DataTable_1";
import RevenueComparisonChart from "../Components/RevenueComparisonChart";
import FeedbackComparisonChart from "../Components/FeedbackComparisonChart";
import SalesDataChart from "../Components/SalesDataChart";
import TotalCallsChart from "../Components/TotalCallsChart";

const SalesDashboard = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div>
          <RegionButtons />
        </div>
        <div>
          <Progress />
        </div>
      </div>

      <section className="">
        <DataTable_1 />
      </section>

      <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 shadow rounded">
              <RevenueComparisonChart />
            </div>
            <div className="bg-gray-300 p-4 shadow rounded">
              <FeedbackComparisonChart />
            </div>
            <div className="bg-gray-400 p-4 shadow rounded">
              <SalesDataChart />
            </div>
            <div className="bg-gray-500 p-4 shadow rounded">
              <TotalCallsChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesDashboard;
