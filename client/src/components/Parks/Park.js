// import all necessary dependencies to run our product component
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// function to get a single product data and I use useparams router here

export default function Park() {
  const { id } = useParams();
  const [park, setPark] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetching single data by useEffect() hooks
  useEffect(() => {
      setLoading(true);
      fetch(`https://developer.nps.gov/api/v1/parks?${id}&api_key=5cLj8vdJGzTYxCGdpR1WhAyQFw5OXf8EI8uimKwF`)  // null); 
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
        setPark(actualData)
      })
      .catch((err) => {
       
      });
}, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  //function to show the data we needed
  const ShowPark = () => {
    return (
      <>
        <a href="/" className="backBtn">
          <i class="fa fa-arrow-left"> Go back </i>
        </a>
        <div className="extra-detail">
          <div className="single-product">
            <img
              src={park.image}
              alt={park.name}
              height="400px"
              width="400px"
            />
          </div>
          <div className="single-pro-left">
          
            <p>{park.description}</p>
        
            <button className="addCartBtn">Add to cart</button>
          </div>
        </div>
      </>
    );
  };
  // then we have to call the subcomponent above to display the ddocument into the browser
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          {/* ternary function that if it is loading then we can show the laoding component otherwise we display the Product component */}
          {loading ? <Loading /> : <ShowPark />}
        </div>
      </div>
    </div>
  );
}
