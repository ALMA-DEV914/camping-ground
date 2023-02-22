import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
          </p>
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
