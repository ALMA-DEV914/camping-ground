import React from "react";

import ButtonAppBar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Parks from "../../components/Parks/Parks";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <Banner />
    <Parks/>
      <Footer/>
    </div>
  );
}
