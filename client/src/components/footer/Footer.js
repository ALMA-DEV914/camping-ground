import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from "@mui/material/Container";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box, TextField, InputLabel, Button} from "@mui/material";

function Footer() {
  return (
    <>
      <Container maxWidth="xlg" className="footer">
        <div className="col">
          <h5>Our Story</h5>
          <p>
            When we think about getting healthier and managing various problems
            conditions, one of the suggestions that always pops up is diet or
            exercises. Healthy diet is a very crucial part of how we recover,
            manage our healthy life-style, and make progress. Health@Wellness
            was created for your custom and generic search for a healthy diet
            plan.
          </p><br></br>
          <Box
          component="form"
          noValidate
          autoComplete="off"
          className="subsData"
        >
          <h5>Subscribe to receieve updates</h5>
          <div>
          <TextField
            focused
            className="subscribe-input"
            placeholder="Subscribe here..."
            name="username"
            type="username"
            id="username"
            
          />
          <Button className="subs-btn">Submit</Button></div>
          </Box>
        </div>
        <div className="col">
          <div className="col-icons">
          <FacebookIcon />
          <InstagramIcon/>
          <TwitterIcon />
          </div>
        </div>
        <div className="col">
          <h5>Contact Us</h5>
          <a href="mailto:aungonalna58@gmail.com">health@wellness@gmail.com</a>
          <p>Phone: 7757425989</p>
          <p>Copyright @2022 The health&Wellness - All Rights Reserved</p>
        </div>
      </Container>
    </>
  );
}
export default Footer;
