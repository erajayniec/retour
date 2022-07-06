import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter  } from 'react-router-dom';
import Navbar from './components/inc/navbar';
import StoreList from './components/pages/storelist';
import TourLocator from './components/pages/tourlocator';
import HomePage from './components/pages/homepage';
import TutorialList from './components/pages/tutorials';

function App() {
  return (
    <BrowserRouter>
       <HashRouter basename="/">
       <div className='container-fluid px-0'>           
         <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/storelist" element={<StoreList />} /> 
            <Route exact path="/tourlocator" element={<TourLocator />} />   
            <Route exact path="/tutorials" element={<TutorialList />} /> 
          </Routes>
       </div>
       </HashRouter>
      </BrowserRouter>
  );
}

export default App;
