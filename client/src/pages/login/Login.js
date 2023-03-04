import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
    <Container>
    <Button color="inherit" href="/">
           <ReplyAllIcon/>  Back to home
            </Button>
      <Box
        component="form"
        className="formData"
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        {error && (
          <div className="warning">
            Login failed! Incorrect credentials.
          </div>
        )}
        <h2>Login</h2>
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
        /><br></br>
       <Button className="submitbtn" type="submit" onSubmit={handleFormSubmit}>
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

export default Login;
