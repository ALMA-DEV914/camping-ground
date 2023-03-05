import React from "react";
import ButtonAppBar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Park from "../../components/Parks/Park";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <Banner />
    <Park/>
      <Footer/>
    </div>
  );
}
