import React from 'react'
import Sidebar from '../components/Sidebar'
import LineChart from '../components/Line'
import { Doughnut } from 'react-chartjs-2'

export default function Dashboard() {


  return (
    <div className='dashbooard flex '>
      <Sidebar />
      <div className='main_dashboard'>
        <div>
          <p className='dashboard_main'>Dashboard</p>
        </div>
        <div className='dashboard_greeting flex'>
          <p>Good morning, Blessing</p>
          <img className='cloud' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker_1BlAQKcMj.webp?updatedAt=1682514155318' />
        </div>
        <div className='flex justify-between dasboard_summary'>
          <p className='dashboard_subtext'>Check out your dashboard summary</p>
          <p className='dashboard_analyltics'>View anaylytics</p>
        </div>
        <div className='dashboard_days flex'>
          <div className='days'>
            <p>1 Day</p>
          </div>
          <div className='days'>
            <p>3 Days</p>
          </div>
          <div className='days'>
            <p>7 Days</p>
          </div>
          <div className='days'>
            <p>30 Days</p>
          </div>
          <div className='dashboard_all_time'>
            All Time
          </div>
          <div className='customdate'>
            <p>Custom Date</p>
          </div>
        </div>
        <div className='dashboard_linegrahs'>
          <p className='page_view'>Page view</p>
          <p className='page_num'>500</p>
          <LineChart />
        </div>
      </div>
    </div>
  )
}



