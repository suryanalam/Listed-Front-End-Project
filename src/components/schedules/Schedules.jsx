import React from 'react'
import './Schedules.css'
import data from './data.json'
import { NavLink } from 'react-router-dom'

const Schedules = () => {
  return (
    <div className='end-card'>

        <div className='end-card-title-div'>
            <h3 className='end-card-title'>Today's Schedule</h3>
            <span><NavLink className='see-all-link'>See All {'→'} </NavLink></span>
        </div>

        <div className='end-card-details-div'>
        {
          data.map((data,index)=>(
            <div className='schedule-div' style={{borderColor:`${data.borderColor}`}}>
                <p key = {data.index} className='schedule-heading'>{data.heading}</p>
                <p key = {data.index} className='schedule-time'>{data.time}</p>
                <p key = {data.index} className='schedule-location'>{data.location}</p>
            </div>
          ))
        }
        </div>

    </div>
  )
}

export default Schedules