import React from 'react'
import ResponsiveAppBar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Parks from './components/Parks/Parks';
import Alert from './components/alert/Alert';

function App() {
  return (
    <div>
      <Alert/>
      <ResponsiveAppBar/>
      <Banner/>
     <Parks/>
     
    </div>
  )
}

export default App
