import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Signup from "../../pages/signup/Signup";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
         <p className="subp">EXPLORE CAMPGROUNDS AND PARKS IN THE UNITED STATES</p>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Signup />
            </Box>
          </Modal>
        </Box>
      </Container>
    </React.Fragment>
  );
}
