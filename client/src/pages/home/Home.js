import React from "react";
import Alert from "../../components/alert/Alert";
import ButtonAppBar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import ParksCard from "../../components/Parks/Parks";

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <Banner />
      <Alert />
      <ParksCard/>
    </div>
  );
}
