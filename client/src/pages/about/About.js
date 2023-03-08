import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { default as data } from "../../data.json";
import ButtonAppBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CardMedia, Container } from "@mui/material";
import about from "../../images/20210828_110116.jpg";
import about1 from "../../images/bird.jpeg";
import about2 from "../../images/sunset.jpg";
import about3 from "../../images/suntree.jpeg";

export default function About() {
  return (
    <div>
      <ButtonAppBar />
      <div className="about-section">
        <Container>
          <div className="about-header">
            <span>
              WE AIM TO LET YOU SAVE TIME AND PLAN BETTER AHEAD FOR YOUR VACATION OR CAMPING TRIP BY ALERTING YOU ABOUT AN OPEN CAMPSITES IN MOSTLY FULLY BOOKED CAMPGROUNDS. LESS WORRIES, HAPPY LIFE!
            </span>
            <br></br>
            <h2>ABOUT CAMPTRACK</h2>
            <br></br>
            <CardMedia>
              <img src={about} alt="about-us" className="about-photo" />
            </CardMedia>
            <br></br>
            <Typography>
              A lot of us are bouncing between meetings, processing emails, and
              dealing with one issue after another. Even when we enjoy our work,
              it sometimes becomes a bit much. This is a why we think it’s so
              important to get time away from our screens. We owe it to
              ourselves to regroup, reconnect, and refresh ourselves in
              nature—with our families and friends.
            </Typography>
            <br></br>
            <Typography>
              Unfortunately, booking a campsite is a real drag. It’s hard to
              find good information on which campground is right for you. It’s
              even harder to reserve a spot, when they’re in such high demand.
              This is what we’re here for: to help you discover and reserve a
              great campsite—free of all the hassle.
            </Typography>
          </div>
        </Container>
        <br></br>
        <div className="about-more">
          <Container>
            <Typography variant="h6">
              WE LOVE OUTDOORS.<br></br> CLIMBING, HIKING ARE CAMPING ARE OUR
              FAVORITE{" "}
            </Typography>
            <br></br>
            <Box className="about-creation">
              <CardMedia>
                <img src={about1} alt="" className="about-us" />
              </CardMedia>
              <CardContent className="about-text">
                <h5>There has to be a better way…</h5>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
              </CardContent>
            </Box>
            <Box className="about-creation">
              <CardContent className="about-text">
                <h5>Join the CampTrack family!</h5>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
              </CardContent>
              <CardMedia>
                <img src={about2} alt="" className="about-us" />
              </CardMedia>
            </Box>
            <Box className="about-creation">
              <CardMedia>
                <img src={about3} alt="" className="about-us" />
              </CardMedia>
              <CardContent className="about-text">
                <h5>It started with a hobbies</h5>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
              </CardContent>
            </Box>
          </Container>
        </div>
        <Container>
          <CardContent>
            <Typography variant="h6">
              NOT SURE WHERE TO BEGIN? FIND YOUR FAVORITE PARK AND CAMPSITE 
            </Typography>
          </CardContent>
          <CardContent>
            <h3>LIST OF FAMOUS PARKS</h3>
            <div className="park-div">
              {data.map((data, i) => (
                <li key={i} className="park-btn">
                  {data.name}
                </li>
              ))}
            </div>
          </CardContent>
          <CardContent>
            <h3>LIST OF FAMOUS CAMPGROUNDS</h3>
            <br></br>
            <div className="camp-div">
              {data.map((data, i) => (
                <div key={i}>
                  {data.campgrounds.map((campgrounds, i) => (
                    <li key={i} className="camp-btn">
                      {campgrounds.campName}
                    </li>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
