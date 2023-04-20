import React  from 'react'
import './Dashboard.css'

import Header from '../header/Header'
import AnalyticsCards from '../analytics/AnalyticsCards'
import ChartData from '../chartData/ChartData'
import Products from '../products/Products'
import Schedules from '../schedules/Schedules'

const Dashboard = () => {
  return (
    <div className='dashboard-bg'>
        <div className='dashboard-div'>
            <Header />
            <AnalyticsCards />
            <ChartData />
            <div className="db-inner-div">
              <Products />
              <Schedules />
            </div>
        </div>
    </div>
  )
}

export default Dashboard