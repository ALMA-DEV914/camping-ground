//import all dependencies
import React, { useState } from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import data from "../../data.json";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//function to fetch the products data
export default function Parks() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //we are returning an html docs/rendering the document to display int he browser
  return (
    <>
      <Container>
        <h1>EXPLORE CAMPGROUNDS ABD PARKS IN THE UNITED STATES</h1>

        {/* we are mapping the data by their index and we return the document */}
        {data.map((data, index) => (
          <>
            <div key={index} className="div-title">
              <Card className="cards">
                <CardHeader
                  title={data.name}
                  subheader={data.states}
                  className="title"
                />
                <Typography paragraph>{data.description}</Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <CardMedia component="img" image={data.image}></CardMedia>
                    <br></br>
                    <Typography paragraph>{data.subText}</Typography>
                  </CardContent>
                  <CardContent>
                    {data.campgrounds.map((campgrounds, i) => (
                      <div className="div-camps">
                        <div>
                          <img
                            src={campgrounds.image}
                            alt=""
                            key={i}
                            className="camp-image"
                          />
                          <h3>{campgrounds.campName}</h3>
                        </div>
                        <div>
                          <p>{campgrounds.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          </>
        ))}
      </Container>
    </>
  );
}
