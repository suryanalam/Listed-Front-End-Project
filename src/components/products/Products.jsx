import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <div className='end-card'>
        <div className='end-card-title-div'>
            <h3 className='end-card-title'>Top products</h3>
            <span><NavLink className='see-all-link'>May - June 2021 {'↓'} </NavLink></span>
        </div>
        <div className='end-card-details-div'>
            
        </div>
    </div>
  )
}

export default Products