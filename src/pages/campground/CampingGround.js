import React from 'react';
import ParksCard from '../../components/Parks/Parks'; 
import BannerCamp from '../../components/banner/BannerCamp';
import ButtonAppBar from '../../components/navbar/Navbar';

export default function CampingGround() {
  return (
    <div>
    <ButtonAppBar/>
    <BannerCamp/>
     <ParksCard/>
    </div>
  )
}
