import React from 'react'
import './Statistics.css'
import { Chart } from 'chart.js'
import { Line } from 'react-chartjs-2'
import list from '../../assets/list.png'
export const Quick = () => {
  const date= new Date()
  return (

    <div className="stats">
      <div className="heading">
        <div className="quick-stats">
          <img src={list} alt="" />
          Quick Stats
        </div>
        <button>See All</button>
      </div>
      <div className="month">
      <img src="" alt="" />
      {date.getMonth}
      <img src="" alt="" />
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-text">
            <div className='name'>Customers</div>
            <p>200 <span>+5%</span></p>
          </div>
          <div className="card-graph">
              <Line 
              data={{
                labels:["07","08","09","10","11","12","13"],
                datasets:[{
                  data:[10,40,60,30,80,100,120],
                  borderColor:"cyan",
                  
                }]
              }}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  }
                },
                scales:{
                  y:{
                    display:false,
                  },
                  x:{
                    grid:{
                      display:false
                    }
                  }
                }
              }}
              />
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <div className='name'>Orders</div>
            <p>400<span>+3%</span></p>
          </div>
          <div className="card-graph">
              <Line 
              data={{
                labels:["07","08","09","10","11","12","13"],
                datasets:[{
                  data:[10,40,60,30,80,100,120],
                  borderColor:"green"
                }]
              }}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  }
                },
                scales:{
                  y:{
                    display:false,
                  },
                  x:{
                    grid:{
                      display:false
                    }
                  }
                }
              }}
              />
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <div className='name'>Income</div>
            <p>$20K<span>+5%</span></p>
          </div>
          <div className="card-graph">
              <Line 
              data={{
                labels:["07","08","09","10","11","12","13"],
                datasets:[{
                  data:[10,40,60,30,80,100,120],
                  borderColor:"cyan"
                }]
              }}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  }
                },
                scales:{
                  y:{
                    display:false,
                  },
                  x:{
                    grid:{
                      display:false
                    }
                  }
                }
              }}
              
              />
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <div className='name'>Expenses</div>
            <p>$7K<span>+5%</span></p>
          </div>
          <div className="card-graph">
              <Line 
              data={{
                labels:["07","08","09","10","11","12","13"],
                datasets:[{
                  data:[10,40,60,30,80,100,120],
                  borderColor:"red",
                  tension:0.6
                }]
              }}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  } 
                },
                scales:{
                  y:{
                    display:false,
                  },
                  x:{
                    grid:{
                      display:false
                    }
                  }
                }
              }}
              />
          </div>
        </div>
      </div>
      <div className="quick-links">
  <div className="link-title">Quick Links</div>
  <button>Riders</button>
  <button>Inventory</button>
</div>
    </div>
    
  )
}
