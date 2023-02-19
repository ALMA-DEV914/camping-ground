import React from "react";
import Conatiner from "@mui/material/Container";

export default function Footer({ data }) {
  return (
    <div className="footer">
      {data &&
        data.data.map((data, i) => (
          <Conatiner key={i}>
            <p><b>Addressess</b></p>
            {data.addresses.map((addresses, i) => (
              <p key={i}>
                {" "}
                {addresses.city} - {addresses.line1} - {addresses.line2} -{" "}
                {addresses.postalCode} - {addresses.type}
              </p>
            ))}
          </Conatiner>
        ))}
    </div>
  );
}
