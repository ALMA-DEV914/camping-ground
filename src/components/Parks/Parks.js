import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, TextField } from "@mui/material";
import ActivitiesList from "./Activities";
import Entrance from "./Entrance";
import Footer from "../footer/Footer";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import OperatingHours from "./OperatingHours";
import Alert from "../alert/Alert"

export default function ParksCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?parkCode=yellow&state=CA&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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

  const handleSearch = async () => {
    if (search) {
      const searchedCampground = campgrounds.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setCampgrounds(searchedCampground);
    }
  };

  return (
    <>
      <Container>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <Box position="relative" mb="72px">
          <TextField
            height="80px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1150px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Campgrounds"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#0D98BA",
              color: "#fff",
              textTransform: "none",
              width: { lg: "150px", xs: "80px" },
              height: "60px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          {data &&
            data.data.map((data, i) => (
              <>
                <div key={i} className="parkInfo">
                  <h1 key={data.id}>
                    {data.name} - <span>{data.parkCode}</span>
                  </h1>
                  <p>
                    {data.description} -{" "}
                    <p>
                      Visit the site - <a href={data.url}>{data.url}</a>
                    </p>
                  </p>
                  <p>
                    <b></b> {data.directionsOverview}
                  </p>
                  <p>
                    <b>Addressess:</b>
                  </p>
                  {data.addresses.map((addresses, i) => (
                    <p key={i}>
                      {" "}
                      {addresses.city} - {addresses.line1} - {addresses.line2} -{" "}
                      {addresses.postalCode} - {addresses.type}
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

                  <p>{data.reservationInfo}</p>

                  <p>
                    Reserve your spot here -{" "}
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
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </>
                  ))}
                </div>
              </>
            ))}
        </Box>
      </Container>
      <Footer data={data} />
    </>
  );
}
