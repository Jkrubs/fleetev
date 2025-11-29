import React from 'react'
import bikes from '../../../assets/motorcycle.png'
import list from '../../../assets/list.png'
import './All.css'
import { Chart } from 'chart.js/auto'
import { Doughnut, Line } from 'react-chartjs-2'
import info from '../../../assets/information-button (1).png'
import leased from '../../../assets/handshake.png'
import pending from '../../../assets/clock.png'
import maintenance from '../../../assets/settings.png'
import bike from '../../../assets/bike.png'

export const All = () => {
  return (
   <div className="all-bikes">
  {/* All Bikes information in charts */}
    <div className="charts">
      {/* bike inventory */}
      <div className="available">
        <div className="all-available">
          <div className="all-available-bikes">
            <div className="bikes">
              <div className='img-container'><img src={bikes} alt="" /></div>
              <div className="bikes-text">
                <p>Available Bikes</p>
                <div className="bikes-count">150</div>
              </div>
            </div>
            <button> See All</button>
          </div>
          <div className="condition-bar">
            <p> <span className='span'>+5%</span> since last week</p>
            <div className="bar">
              <div className="green"></div>
              <div className="yellow"></div>
              <div className="red"></div>
            </div>
            <div className="key">
              <p><span className='green-span'></span>Good Condition</p>
              <p><span className='yellow-span'></span>Need Service</p>
              <p><span className='red-span'></span>Damaged</p>
            </div>
          </div>
        </div>
        {/* bookings information card */}
        <div className="all-bookings">
              <div className="all-available-bikes">
            <div className="bikes">
              <div className='img-container'><img src={list} alt="" /></div>
              <div className="bikes-text">
                <p>Bookings</p>
                <div className="bookings-numbers">
                 <div className="bikes-count">120</div>
                 <p><span>+2%</span> since last week</p>
                  </div>
              </div>
            </div>
            <button> See All</button>
          </div>
          <div className="graph">
            <div className="graph-nav">
              <ul>
                <li>5 Days</li>
                <li>1 Week</li>
                <li>1 Month</li>
                <li>6 Months</li>
                <li>1 Year</li>
              </ul>
            </div>
            <div className="line-graph">
              <Line 
                data={
                  {
                    labels:["Mon", "Tue","Wed", "Thur", "Friday"],
                    datasets:[{
                      label:"Bookings",
                      data:[20,30,80,50,100],
                      borderColor:"#0D8A72",
                      backgroundColor:"#0D8A72",
                      tension:0.5

                    },
                  {
                    label:"Bikes",
                      data:[50,60,100,80,100],
                      borderColor:"red",
                      backgroundColor:"red",
                      tension:0.5
                  }
                  ]
                  }
                 }
              
              
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bike Lease information */}
      <div className="lease-status">
          <div className="heading">
            <div className="status">
              <img src={bike} alt="" />
              Lease Status
            </div>
            <div className="filter">
              <select name="" id="">
                <option value="">This Week</option>
                <option value="">This Month</option>
                <option value="">Last 6 Months</option>
                
              </select>
            </div>
          </div>
          <div className="graph">
                 <Doughnut
                data={{
                  datasets:[
                    {
                      data:[110,30,10],
                      backgroundColor: [
                        'green',
                        'cyan',
                        'red'
                      ],
                      circumference:180,
                      rotation:-90
                    }
                  ]
                }}
                  options={{aspectRatio:2}}
                 />
          </div>
          <hr className='divider'/>
          <div className="lease-groups">
            <div className="lease-group">
              <img src={leased} alt="" />
              <p>Hired</p>
              <div className="number">110</div>
            </div>
            <div className="lease-group" id='middle'>
              <img src={pending} alt="" />
              <p>Available</p>
              <div className="number">30</div>
            </div>
            <div className="lease-group">
              <img src={maintenance} alt="" />
              <p>Maintenance</p>
              <div className="number">10</div>
            </div>
          </div>
          <div className="weekly-leases">
        <p>This week you rented out <b>120</b> Bikes <span><img src={info} alt="" /></span></p>
      </div>
      </div>
      
    </div>

    {/* Real time bike tracking using gps */}
    <div className="maps">

    </div>
   </div>
  )
}
