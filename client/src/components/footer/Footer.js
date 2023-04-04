import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function Footer() {
  return (
    <>
      <Container maxWidth="xlg" className="footer">
        <div className="container"> 
          <form className="subsForm">
          <h5>Start using CampTrack today</h5><br></br>
          <input placeholder="Subscribe for newsletter..." type="text" className="subscribe-input"/>
          <button>
          <SendIcon />
          </button><br></br><br></br>
          <p>Copyright @2022 The Camptrack - All Rights Reserved</p>
       </form>  
      
          <div>
            <h5>Contact Us</h5>
            <p>
              {" "}
              <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
            </p>{" "}
            <p>Phone: 7757425989</p>
            <p>
              <a href="mailto:aungonalna58@gmail.com">camptrack@gmail.com</a>
            </p>
           
          </div>
        </div>
      </Container>
    </>
  );
}
export default Footer;
