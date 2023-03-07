import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Container, Autocomplete } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import "react-datepicker/dist/react-datepicker.css";
import { default as data } from "../../data.json";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    phone: "",
    email: "",
    park: "",
    campground: "",
    date: "",
    time: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Container>
        <Button color="inherit" href="/">
          <ReplyAllIcon /> Back to home
        </Button>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
          className="formData"
        >
          {error && (
            <div className="warning">Signup failed! Incorrect credentials.</div>
          )}
          <br></br>
          <h2>Signup</h2>
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Username
          </InputLabel>
          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="Your username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Phone number
          </InputLabel>
          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="Your contact number"
            name="phone"
            type="phone"
            id="phone"
            country={"us"}
            value={formState.phone}
            onChange={handleChange}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Email
          </InputLabel>
          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Park
          </InputLabel>
          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="Which park you want to camp?"
            name="park"
            type="park"
            id="park"
            value={formState.park}
            onChange={handleChange}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Campground
          </InputLabel>

          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="Campground name?"
            name="campground"
            type="campground"
            id="campground"
            value={formState.campground}
            onChange={handleChange}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Choose your date
          </InputLabel>

          <TextField
            id="date"
            name="date"
            label="Choose the date of arrival"
            type="date"
            defaultValue="2023-02-24"
            InputLabelProps={{
              shrink: true,
            }}
            value={formState.date}
            onChange={handleChange}
          />
          <TextField
            label="Expected time of arrival"
            defaultValue="04:20"
            type="time"
            name="time"
            id="time"
            value={formState.time}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Password
          </InputLabel>
          <TextField
            label="Outlined secondary"
            color="success"
            focused
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <br></br>
          <Button
            className="submitbtn"
            type="submit"
            onSubmit={handleFormSubmit}
          >
            Submit
          </Button>
          <div className="buttons">
            <Button color="inherit" href="/signup" className="btn">
              SIGNUP
            </Button>

            <Button color="inherit" href="/login" className="btn">
              LOGIN
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
