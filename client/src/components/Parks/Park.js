// import all necessary dependencies to run our product component
import React from "react";
import { useParams } from "react-router-dom";
// function to get a single product data and I use useparams router here

export default function Park({data}) {
  const { id } = useParams();
  
  //function to show the data we needed
  const ShowPark = () => {
    return (
      <>
        <a href="/" className="backBtn">
         Go back 
        </a>
        {data && data.data.map((data) => 
        <div key={id}>
            {data.name}
        </div>
        )}
      </>
    );
  };
  // then we have to call the subcomponent above to display the ddocument into the browser
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          {/* ternary function that if it is loading then we can show the laoding component otherwise we display the Product component */}
          {<ShowPark data={data}/>}
        </div>
      </div>
    </div>
  );
}
