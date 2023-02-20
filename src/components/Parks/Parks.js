import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, TextField } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function ParksCard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");

  const [searchParam] = useState(["parkCode", "name"]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?all&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
        setIsLoaded(true);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works.
      </p>
    )
  } else if (!isLoaded) {
    <div>A moment please...</div>
  } else {
    return (
      <Container>
        <Box position="relative" mb="72px">
          <TextField
            height="80px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1150px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Campgrounds"
            type="search"
            name="search-form"
            id="search-form"
          />
        </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }} >
              {search (data &&
                data.data).map((data, i) => (
                  <>
                    <div key={i} className="parkInfo">
                      <h1 key={data.id}>
                        {data.name} - <span> {data.parkCode}</span>
                      </h1>
                      <p>
                        {data.description} - {" "} - {data.campsites.total}
                     <br></br>
                          Visit the site - <a href={data.url}>{data.url}</a>
                        </p>
                      <p>{data.directionsOverview}</p>
                      <p><b>Addressess:</b></p>
                      {data.addresses.map((addresses, i) => (
                        <p key={i}>
                          {" "}
                          {addresses.city} - {addresses.line1} -{" "}
                          {addresses.line2} - {addresses.postalCode} -{" "}
                          {addresses.type}
                        </p>
                      ))}
                      <p>
                        <b>Direction: </b>{" "}
                        <a href={data.directionsUrl}>{data.directionsUrl}</a>
                      </p>
                      <p>
                        <b>Weather: </b> {data.weatherOverview} - {data.latLong}
                      </p>
                      <p>
                        Read about regulations here -{" "}
                        <a href={data.regulationsurl}>{data.regulationsurl}</a>
                      </p>

                      <p>
                        {data.reservationInfo} -{" "}
                        <a href={data.reservationUrl}>{data.reservationUrl}</a>
                      </p>
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
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                              >
                                {images.altText}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                key={images.id}
                              >
                                <br></br>
                                {images.caption} - photo credit from{" "}
                                {images.credit}
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
}
