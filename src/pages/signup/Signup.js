import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from '@mui/material/Button';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });

  const [addUser, {error}] = useMutation(ADD_USER);

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        {error && <div className='bg-danger text-white p-2 opacity-75 text-center'>Login failed! Incorrect credentials.</div>}
        <h2 className="text-secondary mb-2 text-center">Signup</h2>
        <InputLabel shrink htmlFor="bootstrap-input">
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
        <InputLabel shrink htmlFor="bootstrap-input">
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
        <InputLabel shrink htmlFor="bootstrap-input">
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
      </Box>
      
      <Button color="inherit" href="/signup">SIGNUP</Button>
     
      <Button color="inherit" href='/login'>LOGIN</Button>
    </>
  );
};

export default Signup;
