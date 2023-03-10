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
            <h5>Our Story</h5>
            <p>
              When we think about getting healthier and managing various
              problems conditions, one of the suggestions that always pops up is
              diet or exercises. Healthy diet is a very crucial part of how we
              recover, manage our healthy life-style, and make progress.
              Health@Wellness was created for your custom and generic search for
              a healthy diet plan.
            </p>
            <br></br>
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
                health@wellness@gmail.com
              </a>
            </p>
            <p>Copyright @2022 The health&Wellness - All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Footer;
