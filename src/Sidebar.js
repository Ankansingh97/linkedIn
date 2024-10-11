import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import image from './image/codioful-formerly-gradienta-ix_kUDzCczo-unsplash.jpg'


const Sidebar = () => {


    const recentItem = (topic) =>(
           <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
           </div>
    )



  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src={image} alt='hey'/>
        <Avatar className='sidebar_avatar'/>
        <h2>ankan singh</h2>
        <h3>ankansingh97@gmail.com</h3>
      </div>
      <div className='sidebar_stats'>
            <div className='sidebar_stat'>
              <p>who viewed you</p>
              <p className='sidebar_statNumber'>2536</p>
            </div>
            <div className='sidebar_stat'>
            <p>views on photo</p>
            <p className='sidebar_statNumber'>2036</p>
            </div>

      </div>
      <div className='sidebar_bottom'>
          <p>Recent</p>
          {recentItem('react.js')}
          {recentItem('programming')}
          {recentItem('web developer')}
          {recentItem('design')}
          {recentItem('developer')}
      </div> 
    </div>
  )
}

export default Sidebar;
