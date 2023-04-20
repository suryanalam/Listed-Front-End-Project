import React from 'react'
import './HeaderCard.css'

const HeaderCard = ({icon, text, value, bgColor}) => {
  return (
    <div className='header-card' style = {{backgroundColor:`${bgColor}`}}>
        <div className='card-icon-div'>
            <span className='card-icon'>{icon}</span>
        </div>
        <div className='card-details-div'>
            <p className='text-name'>{text}</p>
            <h2 className='text-value'>$ {value}</h2>
        </div>
    </div>
  )
}

export default HeaderCard