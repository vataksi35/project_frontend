import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./Main";
import Rooms from "./Rooms";
import Activities from './Activities';
import Footer from "./Footer";
import Header from "./Header";
import Client from "./Client101";
import Client2 from "./Client102";
import Client3 from "./Client103";
import Client4 from "./Client104";
import Client5 from "./Client105";
import Client6 from "./Client106";
import Client7 from "./Client107";
import Client8 from "./Client108";
import Client9 from "./Client109";
import Client10 from "./Client110";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Main /><Footer /></>} />
        <Route path="rooms" element={<><Header /><Rooms /><Footer /></>}/>
        <Route path="activities" element={<><Header /><Activities /><Footer /></>}/>
        <Route path="/rooms/101" element={<><Header /><Client /><Footer /></>}/>
        <Route path="/rooms/102" element={<><Header /><Client2 /><Footer /></>}/>
        <Route path="/rooms/103" element={<><Header /><Client3 /><Footer /></>}/>
        <Route path="/rooms/104" element={<><Header /><Client4 /><Footer /></>}/>
        <Route path="/rooms/105" element={<><Header /><Client5 /><Footer /></>}/>
        <Route path="/rooms/106" element={<><Header /><Client6 /><Footer /></>}/>
        <Route path="/rooms/107" element={<><Header /><Client7 /><Footer /></>}/>
        <Route path="/rooms/108" element={<><Header /><Client8 /><Footer /></>}/>
        <Route path="/rooms/109" element={<><Header /><Client9 /><Footer /></>}/>
        <Route path="/rooms/110" element={<><Header /><Client10 /><Footer /></>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();