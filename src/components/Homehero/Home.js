import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicGrid() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }} className="homehero">
      <div className="homeContent">
        <Typography variant="h3" component="h2" className="title">
         FIND SPOT AND GRAB YOUR NEXT CAMPGROUND 
        </Typography>
        <Typography variant="p" component="h4">
          Tell us when, where, and how long you want to camp for. We’ll notify
          you (via SMS) when a suitable spot opens up at that campground—so you
          can nab that sold-out campsite reservation! Plans start at $10{" "}
        </Typography><br></br>
        <Button onClick={handleOpen}>FIND A PARK OR CAMPGROUND</Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Find your favorite spot
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography>
                Start typing the name of the park or campground you'd like to
                reserve, or browse our campground directory
              </Typography>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder="Search campgrounds or park"
              />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
