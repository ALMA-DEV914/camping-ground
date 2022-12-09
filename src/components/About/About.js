import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import image1 from "../../static/images/scan.png";
import image2 from "../../static/images/alert.png"
import image3 from "../../static/images/reserved-sign-beachs-background-32398361.jpg"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "80%", margin: "5% auto" }}>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Typography variant="h4">
          WE PROVIDE CAMPSITE AVAILABILITY ALERTS HOW CAMPNAB WORKS
        </Typography>
        <Typography>
          People book campsites at popular parks months in advance. Sometimes
          their plans change and they cancel their reservations—leaving a
          campsite unused. Campnab monitors campgrounds for canceled
          reservations, and notifies you with a camp alert when a campsite opens
          up.
        </Typography>
        <Grid item xs={4}>
          <Item>
            <img src={image1} alt="" />
            <Typography>
             <Typography variant="h4">Create a scan </Typography>
              Go to the top of this page and search for the park
              you want to camp at. Then choose your preferred campground,
              arrival date, number of nights, and how you’d like to pay. Once
              you have, your first campsite scan will start running. 🙌
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={image2} alt="" />
            <Typography>
            <Typography variant="h4"> 
              Wait for an alert
              </Typography>
               Now’s the tough part… waiting. You never know
              when someone will cancel their campsite reservation. However, the
              longer you scan for, the better your odds. Not getting the results
              you want? Check out some of these tips for improving your chances.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={image3} alt="" />
            <Typography>
            <Typography variant="h4">Reserve that spot!</Typography>
               If a suitable campsite opens up, we’ll send you
              a text message. If you receive one, act fast. Canceled
              reservations are often rebooked in minutes or seconds. So, go to
              your park’s website and if the spot is still available, reserve
              it! 💯
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
