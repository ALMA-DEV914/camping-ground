import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const states = [
  {
    name: "ALASKA",
    image:"https://cdn.britannica.com/36/5436-004-EC372D91/Flag-Alaska.jpg",
  },
  { name: "ALABAMA", image: "https://volunteerflagcompany.com/wp-content/uploads/2017/06/alabama-flag.jpg" },
  { name: "ARIZONA", image: "https://azlibrary.gov/sites/default/files/arizona-state-flag.png" },
  {name:"ARKANSAS", image:"https://cdn.britannica.com/82/5882-004-2CF01176/flag-design-state-legislature-others-diamond-Arkansas-1923.jpg"},
  {name:"CALIFORNIA", image:"https://www.50states.com/wp-content/uploads/2021/02/nunst0006-360x240.gif"},
  {name:"COLORADO", image: "https://www.50states.com/wp-content/uploads/2020/01/colorado-flag-768x512.png"},
  {name:"CONNECTICUT",image: "https://www.50states.com/wp-content/uploads/2020/01/Connecticut-state-flag-768x593.png.webp"},
  {name:"DELAWARE",image: "https://www.50states.com/wp-content/uploads/2020/01/de-largeflag.png.webp"},
  {name:"FLORIDA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst012-360x240.gif"},
  {name:"GEORGIA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst090.gif"},
  {name:"HAWAII",image: "https://www.50states.com/wp-content/uploads/2020/01/1280px-Flag_of_Hawaii.svg_-768x384.png"},
  {name:"IDAHO",image: "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_Idaho.svg_.png.webp"},
  {name:"ILLIONIS",image: "https://www.50states.com/wp-content/uploads/2020/01/800px-Flag_of_Illinois.svg_-768x461.png.webp"},
  {name:"INDIANA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst021.gif"},
  {name:"IOWA",image: "https://www.50states.com/wp-content/uploads/2020/01/flagofIowa-768x513.png"},
  {name:"KANSAS",image: "https://www.50states.com/wp-content/uploads/2020/01/800px-Flag_of_Kansas-768x461.png.webp"},
  {name:"KENTUCKY",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst026-360x188.gif"},
  {name:"LOUISANA",image: "https://www.50states.com/wp-content/uploads/2021/02/LouisianaStateFlagRGBLarge-1-768x497.jpg.webp"},
  {name:"MAINE",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst030.gif"},
  {name:"MARYLAND",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst032-360x240.gif"},
  {name:"MASSACHUSSETTS",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst033-360x216.gif"},
  {name:"MICHIGAN",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst035-360x240.gif"},
  {name:"MINNESOTA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst037-360x232.gif"},
  {name:"MISSISSIPPI",image: "https://www.50states.com/wp-content/uploads/2021/01/50-States-mississippi-state-flag-2-e1611052007102.png.webp"},
  {name:"MISSOURI",image: "https://www.50states.com/wp-content/uploads/2020/01/Missouri-state-flag-flat-768x461.png.webp"},
  {name:"MONTANA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst042-360x240.gif"},
  {name:"NEBRASKA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst044-360x216.gif"},
  {name:"NEVADA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst046-360x240.gif"},
  {name:"NEW HAMPSHIRE",image: "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_New_Hampshire.svg_.png.webp"},
  {name:"NEW JERSEY",image: "https://www.50states.com/wp-content/uploads/2020/01/state-flag-new-jersey_800-768x512.jpg.webp"},
  {name:"NEW MEXICO",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst052-360x240.gif"},
  {name:"NEW YORK",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst053-360x180.gif"},
  {name:"NORTH CAROLINA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst055.gif"},
  {name:"NORTH DAKOTA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst056.gif"},
  {name:"OHIO",image: "https://www.50states.com/wp-content/uploads/2021/01/ohio-flag-large-768x472.png"},
  {name:"OKLAHOMA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst059-360x240.gif"},
  {name:"OREGON",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst061-360x216.gif"},
  {name:"PENNSYLVENIA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst063.gif"},
  {name:"RHODE ISLAND",image: "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_Rhode_Island.svg_.png"},
  {name:"SOUTH CAROLINA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst066-360x240.gif"},
  {name:"SOUTH DAKOTA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst067-360x216.gif"},
  {name:"TENNESSEE",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst069-360x216.gif"},
  {name:"TEXAS",image: "https://www.50states.com/wp-content/uploads/2020/01/640px-Flag_of_Texas4.png.webp"},
  {name:"UTAH",image: "https://www.50states.com/wp-content/uploads/2020/01/1024px-Flag_of_Utah.svg_-768x480.png.webp"},
  {name:"VERMONT",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst073-360x216.gif"},
  {name:"VIRGINIA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst075-360x232.gif"},
  {name:"WASHINGTON",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst077-360x240.gif"},
  {name:"WEST VIRGINIA",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst080.gif"},
  {name:"WISCONSIN",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst081-360x240.gif"},
  {name:"WYYOMING",image: "https://www.50states.com/wp-content/uploads/2021/02/nunst083-360x252.gif"},
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#EBECF0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "12px 12px",
  background: "	#EBECF0",
  width: "30%",
  alignItems: 'center !important',
  color: theme.palette.text.secondary,
}));

export default function ParksCard() {
  return (
    <>
      <Container>
        <h1>EXPLORE CAMPGROUNDS IN THE UNITED STATES</h1>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {states.map((state, i) => (
              <Item key={i}>
                <img src={state.image} alt="flag" />
                <a href={`/parks/${state.name}`} className="btn-link">
                {state.name}
                </a>
              </Item>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
