//import all dependencies
import React, { useEffect, useState } from "react";

//function to fetch the products data
export default function Parks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState("");
  const [show, setShow] = useState("");
  //use this hooks to fetch data from an API
  useEffect(() => {
        fetch(
          `https://developer.nps.gov/api/v1/parks?limit=5&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`
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
            setLoading(true)
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
    <div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the product data - ${error}`}</div>
      )}
      <ul>
        {/* we are mapping the data by their index and we return the document */}
        {data &&
          data.data.map((data, index) => (
            <div key={index} className="product-list" onClick={handleClick}>
              <div className="product-right-details">
                {/* I am creating a link to single product if user will click the image or the title */}
                <a href={`/park/${data.id}`}>
                  <img src={data.image} alt="product" />
                </a>
                <a href={`/park/${data.id}`} className="park-title">
                  {" "}
                  {/* I cut down the title into 12 string by using the substring() method */}
                  <h3>{data.fullName.substring(0, 12)}</h3>
                </a>
                {/* I used ternary operator to set the chevron btn into active and not active */}
                <i
                  onClick={handleClick}
                  key={index}
                  id={`${data.id}`}
                  className={
                    active === `${data.id}`
                      ? "fa fa-chevron-right active"
                      : "fa fa-chevron-left"
                  }
                ></i>
              </div>
              {/* I also used ternary operator here to show or not show the target data by their id */}
              {show === `${data.id}` ? (
                <div
                  className="product-left-details active"
                  key={index}
                  id={`${data.id}`}
                  onClick={() => setShow()}
                >
                  <p>{data.description}</p>
  
                  <button className="addCartBtn">Show more</button>
                </div>
              ) : null}
            </div>
          ))}
      </ul>
    </div>
  );
}
