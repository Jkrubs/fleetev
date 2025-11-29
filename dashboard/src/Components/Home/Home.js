import React from 'react'
import './Home.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { Routes, Route } from 'react-router'
import { All } from '../Pages/All Bikes/All'
import { Add } from '../Pages/Add Bike/Add'
import { Statistics } from '../Statistics/Statistics'
import FleetMapSimulation from '../Maps/Map'
export const Home = () => {
  return (
   <div className="home">
    <Sidebar/>
    <div className="main">
        <Routes>
            <Route path='/' element={<All/>}/>
            <Route path='/add-bike' element={<Add/>}/>
        </Routes>
        <div className="map">
          <FleetMapSimulation/>
        </div>
        
    </div>
    <Statistics/>
   </div>
  )
}
