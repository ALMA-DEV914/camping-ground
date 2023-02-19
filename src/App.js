import React from "react";
import ResponsiveAppBar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Parks from "./components/Parks/Parks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Banner />
       <Router>
        <Routes>
          <Route exact path="/" element={<Parks />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
