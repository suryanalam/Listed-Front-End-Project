import React from 'react'
import './Header.css'

import {FaRegBell} from 'react-icons/fa'
import {IoMdSearch} from 'react-icons/io'

const Header = () => {
  return (
    <div className="db-inner-div">
        <div className='innerdiv1-title-div'>
        <h3 className='title'>Dashboard</h3>
        </div>
        <div className='innerdiv1-profile-div'>
            <div className='search-div'>
                <input type='search' className="search" placeholder="Search..." />
                <IoMdSearch />
            </div>
            <FaRegBell />
            <img src={''} alt="" className='profile-pic'/>
        </div>
    </div>

  )
}

export default Header