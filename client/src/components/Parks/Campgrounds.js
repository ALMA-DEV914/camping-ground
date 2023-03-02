import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "@mui/material/Link";

export default function CampgroundsCard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");

  const [searchParam] = useState(["stateCode", "name"]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?stateCode=AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MT,MO,MS,MN,MI,MA,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY&api_key=5cLj8vdJGzTYxcGdpR1WhAyQFw5OXf8EI8uimKwF`
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
      
  }, [query, data]);

  

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
         item[newItem].toString().toLowercase().indexOf(query.toLowercase()) >
          -1
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
    );
  } else if (!isLoaded) {
    <div>A moment please...</div>;
  } else {
    return (
      <>
      <container className="campSearch">
      <Box position="relative">
          <TextField
            height="80px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1150px", xs: "350px" },
              backgroundcolor: "#fff",
              borderRadius: "40px",
              margin: '0% auto'
            }}
            value={query}
            onchange={(e) => setQuery(e.target.value)}
            placeholder="Search campgrounds by park code or name"
            type="search"
            name="search-form"
            id="search-form"
          />
        </Box>
      </container>
      <container>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }} className="campbox">
          {search(data && data.data).map((data, i) => (
            <>
            <div key={i} className="parkInfo">
                <h1 key={data.id}>
                  {data.name} - <span> {data.parkcode}</span>
                </h1>
                <p>
                  {data.description} With the total campsites of{" "}
                  {data.numberOfSitesFirstcomeFirstServe} that offer in first
                  come first serve basis.
                </p>
                <p>{data.directionsOverview ? data.audioDescription : null}</p>
                {data.addresses.map((addresses, i) => (
                  <div>
                    {addresses ? (
                      <p>
                        {addresses.city} - {addresses.line1} - {addresses.line2}{" "}
                        - {addresses.postalcode} - {addresses.type}
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
                {data.fees.map((fees, i) => (
                  <li key={i}>
                    {fees.title} - {fees.cost} - {fees.description}
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
                    ) : <div key={i} className="parkInfo">
                    <h1 key={data.id}>
                      {data.name} - <span> {data.parkcode}</span>
                    </h1></div>}
                  </>
                ))}
                <br></br>
                <p>
                  <b>Acessibility</b> - {data.acessibility.adaInfo}{" "}
                  {data.acessibility.fireStovePolicy}{" "}
                  {data.acessibility.rvAllowed
                    ? data.acessibility.rvAllowed
                    : null}{" "}
                  {data.acessibility.rvInfo ? data.acessibility.rvInfo : null}{" "}
                  {"Wheelchair acess is - "}{" "}
                  {data.acessibility.wheelchairAcess
                    ? data.acessibility.wheelchairAcess
                    : null}{" "}
                  {data.acessibility.acessRoads
                    ? data.acessibility.acessRoads
                    : null}{" "}
                  <b>classifications:</b> {data.acessibility.classifications}
                </p>
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
                    <card key={images.id} className="cards">
                      <cardMedia
                        sx={{ height: 140 }}
                        image={images.url}
                        title={images.title}
                      />
                      <cardcontent key={images.id}>
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
                      </cardcontent>
                    </card>
                  </>
                ))}
              </div>
              </>
          ))}
        </Box>
      </container>
      </>
    );
  }
}


