import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BannerReview() {
  return (
    <div>
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className='bannerReview'>
      <Box sx={{ height: '60vh'}} />
     </Container>
    </React.Fragment>
    </div>
  )
}
