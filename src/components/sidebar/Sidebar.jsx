import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

import {RiDashboard2Line} from 'react-icons/ri'
import {TbTags, TbCalendarStats} from 'react-icons/tb'
import {BiUserCircle} from 'react-icons/bi'
import {IoSettingsOutline} from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='sidebar-bg'>
        <div className='sidebar-div'>
            <div className='nav-bg'>
                <div className='nav-title-div'>
                  <h2 className='nav-title'>Board.</h2>
                </div>

                <nav className='navbar'>
                
                  <div className='nav-items-div'>
                      <RiDashboard2Line size="1rem" className='nav-item-icon' />
                      <NavLink className="nav-item" to = '/Dashboard'>Dashboard</NavLink>
                  </div>
                  <div className='nav-items-div'>
                      <TbTags size="1rem" className='nav-item-icon'/>
                      <NavLink className="nav-item" to = '/Transactions'>Transactions</NavLink>
                  </div>
                  <div className='nav-items-div'>
                      <TbCalendarStats size="1rem" className='nav-item-icon'/>
                      <NavLink className="nav-item" to = '/Schedules'>Schedules</NavLink>
                  </div>
                  <div className='nav-items-div'>
                      <BiUserCircle size="1rem" className='nav-item-icon'/>
                      <NavLink className="nav-item" to = '/Users'>Users</NavLink>
                  </div>
                  <div className='nav-items-div'>
                      <IoSettingsOutline size="1rem" className='nav-item-icon'/>
                      <NavLink className="nav-item" to = '/Settings'>Settings</NavLink>
                  </div>

                </nav>

            </div>

            <div className='contact-div'>
                <NavLink className="nav-item" to = "/Help" >Help</NavLink>
                <NavLink className="nav-item" to='tel:+91987654321' >Contact Us</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Sidebar