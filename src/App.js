import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampingGround from "./pages/campground/CampingGround";
import Home from "./pages/home/Home";
import Reviews from "./pages/reviews/Reviews";

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/campgrounds" element={<CampingGround />} />
          <Route exact path="/reviews" element={<Reviews/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
