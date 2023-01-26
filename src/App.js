import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import CampgroundList from './components/campground/CampgroundList';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <>
   <Navbar />
   <CampgroundList/>
   </>
  );
}

export default App;
