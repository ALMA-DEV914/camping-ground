import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ActivitiesList from "./Activities";
import Entrance from "./Entrance";
export default function ParksCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      {data &&
        data.data.map((data, i) => (
          <>
            <div key={i} className="parkInfo">
              <h1 key={data.id}>
                {data.fullName} - <span>{data.name}</span> in states of{" "}
                {data.states}
              </h1>
              <p>{data.description}</p>
              <p>
                <b>Designation:</b> {data.designation}<br></br>
                <span><b>Addresses:</b> {data.addresses.map((addresses, i) => <li key={addresses.id}>  {addresses.city} - {addresses.line1} - {addresses.line2} - {addresses.postalCode} - {addresses.type}</li>)} </span>
              </p>
              <p>
                <b>Direction:</b> {data.directionsInfo}
              </p>
              <p>
                <b>Direction url: </b>{" "}
                <a href={data.directionsUrl}>{data.directionsUrl}</a>
              </p>
              <p>
                <b>Weather: </b> {data.weatherInfo}
              </p>
              <p>
                <b>LatLong: </b> {data.latLong}
              </p>
            </div>
            <div className="parkImages">
              {data.images.map((images, i) => (
                <Card sx={{ maxWidth: 345 }} key={images.id} className="cards">
                  <CardMedia
                    sx={{ height: 140 }}
                    image={images.url}
                    title={images.title}
                  />
                  <CardContent key={images.id}>
                    <Typography gutterBottom variant="h5" component="div">
                      {images.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" key={images.id}>
                      <span className="altText">{images.altText}</span>
                      <br></br>
                      {images.caption} - photo credit from {images.credit}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </>
        ))}
        <Entrance data={data}/>
        <ActivitiesList data={data}/>
    </Container>
  );
}
