import React, { useContext } from 'react'
import { Quick } from './Quick'
import { Events } from '../Notifications/Events'
import { Notifications } from '../Notifications/Notifications'
import { StatsContext } from '../AppContext/StatsContext'
import './Statistics.css'
import { Profile } from './profile'

export const Statistics = () => {
  const{active}=useContext(StatsContext)
  return (
    <div className="stats-container">
      {
        active==='stats'&&<Quick/>
      }
      {
        active==='calendar'&&<Events/>
      }
      {
        active==='notifications'&&<Notifications/>
      }
      {
        active==='profile'&&<Profile/>
      }
    </div>
  )
}
