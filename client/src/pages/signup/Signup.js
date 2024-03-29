import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    phone: "",
    email: "",
    park: "",
    date: "",
    time: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const {name, value} = event.target;
    const { park } = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
      [park]: value,
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
      console.error(e.message);
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
            focused
            color="success"
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
            focused
            color="success"
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
            focused
            color="success"
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          
          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Password
          </InputLabel>
          <TextField
            focused
            color="success"
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
