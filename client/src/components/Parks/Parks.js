//import all dependencies
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from "@mui/material/Collapse";

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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //use this hooks to fetch data from an API
  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=CA&parkCode=yose&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setLoading(false);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, [data]);

  //we are returning an html docs/rendering the document to display int he browser
  return (
    <Container>
      <h1>EXPLORE CAMPGROUNDS IN THE UNITED STATES</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the product data - ${error}`}</div>
      )}

      {/* we are mapping the data by their index and we return the document */}
      {data &&
        data.data.map((data, index) => (
          <>
            <div key={index} className="div-title">
            <Card className="profile">
      <CardHeader>
              <button>
                {/* I am creating a link to single product if user will click the image or the title */}
                <a href={`/park/${data.id}`} className="btn-link">
                  {" "}
                  {/* I cut down the title into 12 string by using the substring() method */}
                  <h3>{data.fullName}</h3>
                </a>
              </button>
              </CardHeader>
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
                  <Typography paragraph>STATES: {data.states} - {data.name}</Typography>
                  <Typography paragraph>
                    {data.description}
                  </Typography>
                 <CardMedia>
                    {data.images((images, i) => <li key={i}>
                      <img src={images} alt="camps" />
                    </li>)} </CardMedia>
                    <Typography paragraph>{data.images.description}
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
              </Card>
            </div>
          </>
        ))}
    </Container>
  );
}
