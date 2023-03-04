import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BannerCamp() {
  return (
    <div>
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='bannerCamp'>
      <Box sx={{ height: '60vh'}}>
        <div className='about'>
          
        </div>
      </Box>
     </Container>
    </React.Fragment>
    </div>
  )
}
