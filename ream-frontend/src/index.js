import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/create/create';
import Investment from './pages/investment/investment';
import Sendfund from './pages/sendFund/sendfund';
import Receipt from './pages/receipt/receipt';
import Create from './pages/create/create';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/pricing' element={<App/>} />
          <Route path='/contact' element={<App/>} />
          <Route path='/create' element={<Create/>} />
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

