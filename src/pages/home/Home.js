import React from 'react';
import Alert from '../../components/alert/Alert';
import ButtonAppBar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';

export default function Home() {
  return (
    <div>
      <Alert/>
      <ButtonAppBar/>
      <Banner />
    </div>
  )
}
