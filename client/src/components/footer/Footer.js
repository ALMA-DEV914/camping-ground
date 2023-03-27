import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, TextField, Button, Container } from "@mui/material";

function Footer() {

  return (
    <>
      <Container maxWidth="xlg" className="footer">
        <div className="container">
          <div>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="subsData"
            >
              <h5>Subscribe to receieve updates</h5>
              <div className="subs-input">
                <TextField focused 
                className="subscribe-input"
                placeholder="Subscribe here..." />
                <Button className="subs-btn">Submit</Button>
              </div>
            </Box>
            <h5>Our Story</h5>
            <p>
              When we think about getting a place to stay on and managing various problems or hassles in finding ideal places, one of the suggestions that always pops up is book in advance. Palnning in advance is a very crucial part of how we
              saved time, manage our vacation or camping trip, and make good experience.
              Camptrack was created for your custom and generic search for
              a campsites that are fully booked most of the time.
            </p>
          </div>

          <div>
            <h5>Contact Us</h5>
            <p>
              {" "}
              <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
            </p>{" "}
            <p>Phone: 7757425989</p>
            <p>
              <a href="mailto:aungonalna58@gmail.com">
                camptrack@gmail.com
              </a>
            </p>
            <p>Copyright @2022 The Camptrack - All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Footer;
