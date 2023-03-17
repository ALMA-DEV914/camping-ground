import React from "react";
import ParkIcon from "@mui/icons-material/Park";

const ParkList = ({ parks, title}) => {
  if (!parks) {
    return <h3>No Booking History Yet</h3>;
  }

  return (
    <>
      <h4>{title}</h4>
      <div className="booking">
        {parks &&
          parks.map((park) => (
            <div key={park._id} className="booking-div">
              <div className="booking-header">
                <p style={{ fontWeight: 700 }} className="text-username">
                 Book on {park.createdAt}
                </p>
              </div>
              <div className="booking-body">
                <ParkIcon /> Camping at {park.parkArea}
                <br></br>
                
              </div>
            </div>
          ))}
         
      </div>
    </>
  );
};

export default ParkList;
