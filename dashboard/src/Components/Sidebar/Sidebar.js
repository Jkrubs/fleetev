import React from 'react'
import { NavLink } from 'react-router-dom'
import bike from '../../assets/motorcycle.png'
import scooter from '../../assets/scooter.png'
import list from '../../assets/list.png'
import pending from '../../assets/clock.png'
import users from '../../assets/users-avatar.png'
import add_user from '../../assets/add_user.png'
import feedback from '../../assets/like.png'
import dashboard from '../../assets/dashboardIconColored.svg'

import './Sidebar.css'

export const Sidebar = () => {
  return (
   <div className="side-bar">
    <div className="main-dashboard">
        <div className="title">MAIN</div>
        <div className="button"><img src={dashboard} alt="" />Dashboard</div>
    </div>
    <div className="fleet-management">
        <div className="title">FLEET MANAGEMENT</div>
        <div className="links">
            <ul>
                <li><NavLink to={'/'}><img src={bike} alt=''/>All Bikes</NavLink></li>
                <li><NavLink to={'/add-bike'}><img src={bike} alt=''/>Add Bike</NavLink></li>
                <li><NavLink to={'/maintenace log'}><img src={scooter} alt=''/>Maintenance Log</NavLink></li>
            </ul>
        </div>
    </div>
    <div className="bookings">
        <div className="title">BOOKINGS</div>
        <div className="links">
            <ul>
                <li> <NavLink to={'/all-bookings'}><img src={list} alt=''/>All Bookings</NavLink> </li>
                <li> <NavLink to={'/add-booking'}><img src={list} alt=''/>New Bookings</NavLink> </li>
                <li> <NavLink to={'/pending-approvals'}><img src={pending} alt=''/>Pending Approvals</NavLink> </li>
            </ul>
        </div>
    </div>
    <div className="customers">
        <div className="title">CUSTOMERS</div>
        <div className="links">
            <ul>
                <li> <NavLink to={'/'}><img src={users} alt=''/> Customer List</NavLink> </li>
                <li> <NavLink to={'/'}><img src={add_user} alt=''/>Add Customer</NavLink> </li>
                <li> <NavLink to={'/'}><img src={feedback} alt=''/>Feedback & Reviews</NavLink> </li>
            </ul>
        </div>
    </div>

   </div>
  )
}
