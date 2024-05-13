import React from 'react'
import Emailmarketingresult from '../Components/Emailmarketingresult'
import EmailMarketingCampane from '../Components/EmailMarketingCampane'
import AnalyticsSeasions from '../Components/AnalyticsSeasions'
import AnalyticsMain from '../Components/AnalyticsMain'

const MarketingDashboard = () => {
  return (
    <main>
          <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 shadow rounded">
              <Emailmarketingresult/>
            </div>
            <div className="bg-gray-300 p-4 shadow rounded">
             <EmailMarketingCampane/>
            </div>
            <div className="bg-gray-400 p-4 shadow rounded">
             <AnalyticsSeasions/>
            </div>
            <div className="bg-gray-500 p-4 shadow rounded">
              <AnalyticsMain/>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default MarketingDashboard
