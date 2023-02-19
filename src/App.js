import React from "react";
import ResponsiveAppBar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Parks from "./components/Parks/Parks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampingGround from "./pages/campground/CampingGround";
import Alert from "./components/alert/Alert";

function App() {
  return (
    <div>
      <Alert/>
      <ResponsiveAppBar />
      <Banner />
       <Router>
        <Routes>
          <Route exact path="/" element={<Parks />} />
          <Route exact path="/campgrounds" element={<CampingGround />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
