import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
export const Add = () => {
const[make, setMake]=useState('')
const[model, setModel]=useState('')
const[number_plate, setNumber_plate]=useState('')
const[gps_tracker, setGps_tracker]=useState('')
const[maintenance, setMaintenance]=useState('')
const[rate, setRate]=useState('')
const[color, setColor]=useState('')

const handleAddbike=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:5000/bikes/add-bike',{make,model,number_plate,gps_tracker,maintenance,rate,color})
}


  return (
   <div className="add-bike">
    <div className="form-title">Add A New Bike</div>
    <form action="" className='add-bike-form' onSubmit={handleAddbike}>
          <div className="make-details">
            <div className="input-field">
              <label htmlFor="make">Bike make</label>
              <input type="text" name='make' id='make' required placeholder='Eg. Spiro' value={make} onChange={(e)=>setMake(e.target.value)}/>
            </div>
            <div className="input-field">
              <label htmlFor="model">Bike Model</label>
              <input type="text" name='model' id='model' required placeholder='Eg. BJ 150' value={model} onChange={(e)=>setModel(e.target.value)} />
            </div>
          </div>
          <div className="make-details">
          <div className="input-field">
            <label htmlFor="number-plate">Number Plate</label>
            <input type="text" name='number-plate' id='number-plate' required placeholder='Eg. KMCG 669J' value={number_plate} onChange={(e)=>setNumber_plate(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="tracker">GPS Tracker</label>
            <input type="text" name='tracker' id='tracker' placeholder='Enter Serial No.' required value={gps_tracker} onChange={(e)=>setGps_tracker(e.target.value)}/>
          </div>
            </div>
            <div className="make-details">
          <div className="input-field">
            <label htmlFor="maintenance">Bike Condition</label>
            <select name="maintenance" id="maintenance" value={maintenance}onChange={(e)=>setMaintenance(e.target.value)}>
              <option value="Good">Good Condition</option>
              <option value="Needs Service">Needs Service</option>
              <option value="Damaged">Damaged</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="rate">Bike Rate</label>
            <input type="number" name='rate' id='rate' value={rate} onChange={(e)=>setRate(e.target.value)}/>
          </div>
          </div>
          <div className="input-field" id='color'>
            <label htmlFor="color">Bike Color</label>
            <input type="text" name='color' id='color' value={color} onChange={(e)=>setColor(e.target.value)} />
          </div>
          <button>Add Bike</button>
    </form>
   </div>
  )
}
