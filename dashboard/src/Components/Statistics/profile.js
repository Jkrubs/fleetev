import React, { useContext } from 'react'
import { StatsContext } from '../AppContext/StatsContext'

export const Profile = () => {
    const{user}=useContext(StatsContext)
  return (
    <div className="profile">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
    </div>
  )
}
