import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StatsContextProvider from './Components/AppContext/StatsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <StatsContextProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </StatsContextProvider>
    
  </React.StrictMode>
);

