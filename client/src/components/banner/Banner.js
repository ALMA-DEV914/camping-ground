import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";


export default function Banner() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className="banner">
        <Box className="box-modal">
          <Button className="modal-btn">
            <a href="/signup">START HERE</a>
          </Button>
          <p className="subtitle">Find reservations at sold-out campgrounds</p>
          <p className="subp">
            EXPLORE CAMPGROUNDS AND PARKS IN THE UNITED STATES
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
