import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function Alert() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/alerts?parkCode=acad,dena&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
    <Container className="alert">
      {data &&
        data.data.map((data, i) => (
          <Tooltip
            title={
              data.title + "." + " " + data.description + " " + data.url + "Date" + " " + data.lastIndexedDate
            }
            key={i}
          >
            <Button color="warning">{data.category}</Button>
          </Tooltip>
        ))}
    </Container>
  );
}
