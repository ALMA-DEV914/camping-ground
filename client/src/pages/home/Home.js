import React from "react";
import Alert from "../../components/alert/Alert";
import ButtonAppBar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import ParksCard from "../../components/Parks/Parks";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Alert/>
      <ButtonAppBar />
      <Banner />
     <ParksCard/>
      <Footer/>
    </div>
  );
}
