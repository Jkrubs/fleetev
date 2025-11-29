import React, { useState, useEffect, useRef } from 'react';

// Predefined routes in Nairobi area
const nairobiRoutes = [
  // Route 1: CBD area
  [
    [-1.2864, 36.8172], 
    [-1.2875, 36.8195],
    [-1.2890, 36.8210],
    [-1.2905, 36.8225],
    [-1.2920, 36.8240]
  ],
  // Route 2: Westlands
  [
    [-1.2630, 36.8050],
    [-1.2645, 36.8065],
    [-1.2660, 36.8080],
    [-1.2675, 36.8095],
    [-1.2690, 36.8110]
  ],
  // Route 3: Upperhill
  [
    [-1.2920, 36.8240],
    [-1.2935, 36.8255],
    [-1.2950, 36.8270],
    [-1.2965, 36.8285],
    [-1.2980, 36.8300]
  ],
  // Route 4: Kilimani
  [
    [-1.2900, 36.7850],
    [-1.2915, 36.7865],
    [-1.2930, 36.7880],
    [-1.2945, 36.7895],
    [-1.2960, 36.7910]
  ],
  // Route 5: Parklands
  [
    [-1.2500, 36.8200],
    [-1.2515, 36.8215],
    [-1.2530, 36.8230],
    [-1.2545, 36.8245],
    [-1.2560, 36.8260]
  ]
];

// Interpolate between two points
const interpolatePosition = (start, end, progress) => {
  const lat = start[0] + (end[0] - start[0]) * progress;
  const lng = start[1] + (end[1] - start[1]) * progress;
  return [lat, lng];
};

// Convert lat/lng to pixel coordinates
const latLngToPixel = (lat, lng, bounds, mapWidth, mapHeight) => {
  const x = ((lng - bounds.west) / (bounds.east - bounds.west)) * mapWidth;
  const y = ((bounds.north - lat) / (bounds.north - bounds.south)) * mapHeight;
  return { x, y };
};

// Generate initial vehicles
const generateVehicles = (count) => {
  const types = ['scooter', 'ebike', 'motorcycle'];
  const statuses = ['available', 'in-use', 'charging'];
  
  return Array.from({ length: count }, (_, i) => {
    const route = nairobiRoutes[i % nairobiRoutes.length];
    const type = types[i % types.length];
    
    return {
      id: `VEH-${String(i + 1).padStart(3, '0')}`,
      type,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      route,
      currentSegment: 0,
      progress: 0,
      speed: 0.01 + Math.random() * 0.02,
      position: route[0],
      battery: 60 + Math.floor(Math.random() * 40),
      rider: i % 3 === 0 ? `Rider ${Math.floor(i / 3) + 1}` : null
    };
  });
};

function FleetMapSimulation() {
  const [vehicles, setVehicles] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showRoutes, setShowRoutes] = useState(false);
  const [hoveredVehicle, setHoveredVehicle] = useState(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 1200, height: 800 });
  const intervalRef = useRef(null);
  const mapRef = useRef(null);

  // Map bounds for Nairobi area
  const mapBounds = {
    north: -1.24,
    south: -1.32,
    west: 36.76,
    east: 36.86
  };

  const mapWidth = mapDimensions.width;
  const mapHeight = mapDimensions.height;

  // Update map dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const container = mapRef.current?.parentElement;
      if (container) {
        setMapDimensions({
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize vehicles
  useEffect(() => {
    setVehicles(generateVehicles(10));
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setVehicles(prevVehicles => 
        prevVehicles.map(vehicle => {
          const { route, currentSegment, progress, speed } = vehicle;
          
          let newProgress = progress + speed;
          let newSegment = currentSegment;
          
          if (newProgress >= 1) {
            newProgress = 0;
            newSegment = (currentSegment + 1) % (route.length - 1);
          }
          
          const start = route[newSegment];
          const end = route[newSegment + 1];
          const newPosition = interpolatePosition(start, end, newProgress);
          
          return {
            ...vehicle,
            currentSegment: newSegment,
            progress: newProgress,
            position: newPosition
          };
        })
      );
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return '#10b981';
      case 'in-use': return '#f59e0b';
      case 'charging': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'scooter': return 'E-Scooter';
      case 'ebike': return 'E-Bike';
      case 'motorcycle': return 'E-Motorcycle';
      default: return type;
    }
  };

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'scooter': return '🛴';
      case 'ebike': return '🚲';
      case 'motorcycle': return '🏍️';
      default: return '🚗';
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 mt-4">
          
          <div className="flex items-center gap-2">
            
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 relative overflow-hidden">
          
          <svg
            ref={mapRef}
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ pointerEvents: 'auto' }}
          >
            {showRoutes && vehicles.map(vehicle => {
              const points = vehicle.route.map(([lat, lng]) => {
                const pixelCoords = latLngToPixel(lat, lng, mapBounds, mapWidth, mapHeight);
                return `${pixelCoords.x},${pixelCoords.y}`;
              }).join(' ');
              
              return (
                <polyline
                  key={`route-${vehicle.id}`}
                  points={points}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  opacity="0.7"
                  style={{ pointerEvents: 'none' }}
                />
              );
            })}
            
            {vehicles.map(vehicle => {
              const [lat, lng] = vehicle.position;
              const pixelCoords = latLngToPixel(lat, lng, mapBounds, mapWidth, mapHeight);
              const isSelected = selectedVehicle?.id === vehicle.id;
              const isHovered = hoveredVehicle === vehicle.id;
              const scale = isSelected || isHovered ? 1.4 : 1;
              
              return (
                <g
                  key={vehicle.id}
                  transform={`translate(${pixelCoords.x}, ${pixelCoords.y})`}
                  onClick={() => setSelectedVehicle(vehicle)}
                  onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                  onMouseLeave={() => setHoveredVehicle(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {isSelected && (
                    <circle
                      r="20"
                      fill={getStatusColor(vehicle.status)}
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        from="15"
                        to="30"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.5"
                        to="0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  
                  <circle
                    r={14 * scale}
                    fill="rgba(0,0,0,0.2)"
                    transform="translate(2, 2)"
                  />
                  
                  <circle
                    r={14 * scale}
                    fill={getStatusColor(vehicle.status)}
                    stroke="white"
                    strokeWidth="3"
                  />
                  
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={18 * scale}
                  >
                    {getVehicleIcon(vehicle.type)}
                  </text>
                  
                  {(isSelected || isHovered) && (
                    <g>
                      <rect
                        x="-30"
                        y="22"
                        width="60"
                        height="20"
                        rx="4"
                        fill="white"
                        stroke={getStatusColor(vehicle.status)}
                        strokeWidth="2"
                      />
                      <text
                        y="35"
                        textAnchor="middle"
                        className="text-xs font-bold"
                        fill={getStatusColor(vehicle.status)}
                      >
                        {vehicle.id}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
          
          {selectedVehicle && (
            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getVehicleIcon(selectedVehicle.type)}</span>
                  <div>
                    <div className="font-bold text-gray-900">{selectedVehicle.id}</div>
                    <div className="text-xs text-gray-600">{getTypeLabel(selectedVehicle.type)}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span
                    className="px-2 py-1 rounded text-xs font-medium text-white"
                    style={{ backgroundColor: getStatusColor(selectedVehicle.status) }}
                  >
                    {selectedVehicle.status}
                  </span>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Battery:</span>
                    <span className="font-medium">{selectedVehicle.battery}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        selectedVehicle.battery > 50 ? 'bg-green-500' :
                        selectedVehicle.battery > 20 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${selectedVehicle.battery}%` }}
                    />
                  </div>
                </div>
                
                {selectedVehicle.rider && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current Rider:</span>
                    <span className="font-medium">{selectedVehicle.rider}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-xs">
                    {selectedVehicle.position[0].toFixed(4)}, {selectedVehicle.position[1].toFixed(4)}
                  </span>
                </div>
                
                <button className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm">
                  View Full Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FleetMapSimulation;