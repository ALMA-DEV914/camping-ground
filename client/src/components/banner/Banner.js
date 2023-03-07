import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Signup from "../../pages/signup/Signup";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";

export default function Banner() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg" className="banner">
        <Box className="box-modal">
          <Button onClick={handleOpen} className="modal-btn">
            START HERE
          </Button>
          <p className="subtitle">Find reservations at sold-out campgrounds</p>
          <p className="subp">
            EXPLORE CAMPGROUNDS AND PARKS IN THE UNITED STATES
          </p>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
          >
            <div className="signModal">
              <Signup />
            </div>
          </Modal>
        </Box>
      </Container>
    </React.Fragment>
  );
}
