import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.svg'
import calendar from '../../assets/calendar.svg'
import dp from '../../assets/user.png'
import './Header.css'
import { Login } from '../Login/Login'
export const Header = ({ setActive, axios, user, setUser }) => {
    // const [user, setUser]=useState(false)
    const [open, setIsopen] = useState(false)
    const handleOpen = () => {
        setIsopen(true)
    }
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="left-menu">
                <div className="activities">
                    <div className="activity" onClick={() => setActive('calendar')}><img src={calendar} alt="" /></div>
                    <div className="activity" onClick={() => setActive('notifications')}><img src={bell} alt="" /> <span className='span'></span></div>
                </div>
                {user ?
                    <div className="admin-profile" onClick={() => setActive('profile')}>
                        <div className="user-profile"><img src={dp} alt="" /></div>
                        {user && <p>Good evening, {user.name}</p>}
                    </div>
                    :
                    <button onClick={handleOpen}>Login</button>
                }

            </div>
            {open && <Login open={open} setIsopen={setIsopen} axios={axios} user={user} setUser={setUser} />}
        </div>
    )
}
