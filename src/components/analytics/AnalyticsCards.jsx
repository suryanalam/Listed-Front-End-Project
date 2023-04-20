import React from 'react'
import './AnalyticsCards.css'

import HeaderCard from '../header_card/HeaderCard'

import {BiMoney} from 'react-icons/bi'
import {TbTags} from 'react-icons/tb'
import {AiOutlineLike} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'



const AnalyticsCards = () => {
  return (
    <div className="db-inner-div">
        <HeaderCard text = 'Total Revenues' value='2,129,430' bgColor= '#CCE8DB' icon = {<BiMoney  size="1.2rem"/>}/>
        <HeaderCard text = 'Total Transactions' value='1,520' bgColor= '#FAF2E1' icon = {<TbTags size="1.2rem"/>} />
        <HeaderCard text = 'Total Likes' value='9,721' bgColor= '#FFD0CF' icon = {<AiOutlineLike size="1.2rem"/>} />
        <HeaderCard text = 'Total Users' value='892' bgColor= '#B9C6E8' icon = {<FiUsers size="1.2rem"/>} />  
    </div>
  )
}

export default AnalyticsCards