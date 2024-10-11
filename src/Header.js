import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from "./image/linkedin.png"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
  return (
    <div className='header'>

      <div className='header_left'>
       <img src = {linkedin}
       alt=""
       /> 
        
        
        <div className='header_search'>
        <SearchIcon/>
       <input type='text'/>
      </div>
    </div>
      <div className='header_right'>
         <HeaderOption Icon = {HomeIcon} title = "Home"/>
         <HeaderOption Icon = {SupervisorAccountIcon}title = "My network"/>
         <HeaderOption Icon = {MessageIcon} title = "Messaging"/>
         <HeaderOption Icon = {BusinessCenterIcon} title = "Jobs"/>
         <HeaderOption Icon = {NotificationsIcon} title = "Notification"/>
         <HeaderOption avatar={AccountCircleIcon} title="me"/>
      </div>
    </div>
  )
}

export default Header
