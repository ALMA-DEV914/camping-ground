//import all dependencies
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const apiKey = process.env.REACT_APP_API_KEY;


//function to fetch the products data
export default function Parks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false)
  //use this hooks to fetch data from an API
  useEffect(() => {
        fetch(
          `https://developer.nps.gov/api/v1/parks?limit=10&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
            setLoading(false)
            setData(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          });
    }, [data]);

  //function to show product description when chevron btn was clicked
  const handleClick = (event) => {
    setActive(event.target.id);
    setShow(event.target.id);
  };

  //we are returning an html docs/rendering the document to display int he browser
  return (
    <Container>
        <h1>EXPLORE CAMPGROUNDS IN THE UNITED STATES</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the product data - ${error}`}</div>
      )}
    
      <ul>
        {/* we are mapping the data by their index and we return the document */}
        {data &&
          data.data.map((data, index) => (
            <div key={index} className="div-title" onClick={handleClick}>
              <button>
                {/* I am creating a link to single product if user will click the image or the title */}
                <a href={`/park/${data.id}`} className="btn-link">
                  {" "}
                  {/* I cut down the title into 12 string by using the substring() method */}
                  <h3>{data.fullName}</h3>
                </a>
                </button>
              </div>
       ))}
      </ul>
    </Container>
  );
}
