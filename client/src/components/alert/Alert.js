import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const AlertTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 600,
    padding: 15,
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
  },
}));

export default function Alert() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/alerts?stateCode=AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MT,MO,MS,MN,MI,MA,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
        console.log("alert", actualData);
        setData(actualData);
      })
      .catch((err) => {
        setData(null);
      })
      .finally(() => {});
  }, []);

  return (
    <div className="alert">
      <ArrowUpwardIcon/>
      {data &&
        data.data.map((data) => (
          <AlertTooltip
            title={
              <>
                <React.Fragment>
                  <Typography color="inherit">{data.title}</Typography>
                  <em>{data.description}</em> {" - "}
                  <Link href={data.url}>{data.url}</Link> <br></br>
                  <u> Date: {data.lastIndexedDate}</u>.
                </React.Fragment>
              </>
            }
          >
            <Button  variant="standard" key={data.category}>
             {data.category} - {data.parkCode}
            </Button>
          </AlertTooltip>
        ))}
        
    </div>
  );
}
