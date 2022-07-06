import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/inc/navbar';
import StoreList from './components/pages/storelist';
import TourLocator from './components/pages/tourlocator';
import HomePage from './components/pages/homepage';

function App() {
  return (
     <Router>
     <div className='container-fluid px-0'>           
       <Navbar />
        <Routes>
          <Route exact path="" element={<HomePage />} />   
          <Route exact path="/" element={<HomePage />} />       
          <Route exact path="/retourwebsite/" element={<HomePage />} />
          <Route exact path="/storelist" element={<StoreList />} /> 
          <Route exact path="/tourlocator" element={<TourLocator />} />   
        </Routes>
     </div>
     </Router>
  );
}

export default App;
