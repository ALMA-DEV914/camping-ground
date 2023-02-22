import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "@mui/material/Link";

export default function ParksCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
        
      })
      .catch((err) => {
      
        setData(null);
      });
  }, []);

    return (
      <Container>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          {data && data.data.map((data, i) => (
            <>
              <div key={i} className="parkInfo">
                <h1 key={data.id}>
                  {data.name} - <span> {data.parkCode}</span>
                </h1>
                <p>
                  {data.description} With the total campsites of{" "}
                  {data.numberOfSitesFirstComeFirstServe} that offer in first
                  come first serve basis.
                </p>
                <p>{data.directionsOverview ? data.audioDescription : null}</p>
                {data.addresses.map((addresses, i) => (
                  <div>
                    {addresses ? (
                      <p>
                        {addresses.city} - {addresses.line1} - {addresses.line2}{" "}
                        - {addresses.postalCode} - {addresses.type}
                      </p>
                    ) : null}
                  </div>
                ))}
                <br></br>
                <p>
                  <b>Weather: </b> {data.weatherOverview} - {data.latLong}
                </p>
                <br></br>

                <p>{data.reservationInfo}</p>
                <br></br>
                <p>
                  <b>Entrance Fees:</b>
                </p>
                {data.entranceFees.map((entranceFees, i) => (
                  <li key={i}>
                    {entranceFees.title} - {entranceFees.cost} - {entranceFees.description}
                  </li>
                ))}
                <br></br>
                {data.operatingHours.map((operatingHours, i) => (
                  <>
                    {operatingHours ? (
                      <>
                        <p>
                          <b>Opreating hours</b>
                        </p>
                        <p>
                          It is open all day in standard hours or time.{" "}
                          {operatingHours.name} - {operatingHours.description}{" "}
                          {operatingHours.exceptions.map((exceptions, i) => (
                            <span key={i}>
                              {exceptions.name} - start on{" "}
                              {exceptions.startDate} and end on{" "}
                              {exceptions.endDate}
                            </span>
                          ))}
                        </p>
                      </>
                    ) : null}
                  </>
                ))}
                <br></br>
                <div className="links">
                  <Link href={data.url} underline="hover" className="button">
                    {data.url ? <p>Visit the site here </p> : null}
                  </Link>
                  <Link
                    href={data.directionsUrl}
                    underline="hover"
                    className="button"
                  >
                    {data.directionsUrl ? <p>Get direction here</p> : null}
                  </Link>
                  <Link
                    href={data.reservationUrl}
                    underline="hover"
                    className="button"
                  >
                    {data.reservationUrl ? <p>Reserved your spot</p> : null}
                  </Link>
                  <Link
                    href={data.regulationsUrl}
                    underline="hover"
                    className="button"
                  >
                    {data.regulationsUrl ? (
                      <p> Read the regulations - {data.regulationsUrl} </p>
                    ) : (
                      <p> Read the regulations - {data.regulationsurl} </p>
                    )}
                  </Link>
                </div>
              </div>

              <div className="parkImages">
                <DoubleArrowIcon /> Scroll left to see more images
                {data.images.map((images, i) => (
                  <>
                    <Card key={images.id} className="cards">
                      <CardMedia
                        sx={{ height: 140 }}
                        image={images.url}
                        title={images.title}
                      />
                      <CardContent key={images.id}>
                        <Typography gutterBottom variant="h6" component="div">
                          {images.altText}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          key={images.id}
                        >
                          <br></br>
                          {images.caption} - photo credit from {images.credit}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                ))}
              </div>
            </>
          ))}
        </Box>
      </Container>
    );
  }

