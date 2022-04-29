import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/create/create';
import Investment from './pages/dashboard/investment/investment';
import Sendfund from './pages/dashboard/sendFund/sendfund';
import Receipt from './pages/dashboard/receipt/receipt';
import Create from './pages/dashboard/contractInteraction/contractInteraction';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/pricing' element={<App/>} />
          <Route path='/contact' element={<App/>} />
          <Route path='/create' element={<Dashboard/>} />
          <Route path='/receipt' element={<Receipt/>} />
          <Route path='/investment' element={<Investment/>} />
          <Route path='/sendfund' element={<Sendfund/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

