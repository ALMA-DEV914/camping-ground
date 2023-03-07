import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';


export default function ButtonAppBar() { 
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className="navbar">
      {Auth.loggedIn() ? (
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            href='/'
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            CAMPTRACK⛺️
          </IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='/about'>About</a>
          <a href='/faq'>Faq</a>
          <a href='/reviews'>Reviews</a>
         </Typography>
          <Link to="/profile">
                <Button color="inherit">PROFILE</Button>
              </Link>
              <Link href="/" onClick={logout}>
                <Button color="inherit">LOGOUT</Button>
              </Link>
        </Toolbar> ) : (
        <>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            href='/'
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            CAMPTRACK⛺️
          </IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <a href='/about'>About</a>
          <a href='/faq'>Faq</a>
          <a href='/reviews'>Reviews</a>
         </Typography>
          <Button color="inherit" href='/login'>SIGNUP/LOGIN</Button>
        </Toolbar>
        </>
        )}
      </AppBar>
    </Box>
    </>
  );
}