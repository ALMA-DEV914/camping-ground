import React from 'react';
import CampgroundsCard from '../../components/Parks/Campgrounds';
import BannerCamp from '../../components/banner/BannerCamp';
import ButtonAppBar from '../../components/navbar/Navbar';

export default function CampingGround() {
  return (
    <div>
    <ButtonAppBar/>
    <BannerCamp/>
    <CampgroundsCard/>
    </div>
  )
}
