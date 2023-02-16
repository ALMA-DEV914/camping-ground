import React from 'react';
import Banner from './components/banner/Banner';
import CampgroundList from './components/campground/CampgroundList';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
   <Navbar />
   <Banner />
   <CampgroundList/>
   </>
  );
}

export default App;
