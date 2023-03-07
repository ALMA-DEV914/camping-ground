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
    campground: "",
    date: "",
    time: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    const { park, campground } = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
      [park]: value,
      [campground]: value,
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
          <select
            color="success"
            focused
            className="form-input"
            placeholder="Select park"
            name="park"
            type="park"
            id="park"
            value={formState.park}
            onChange={handleChange}
          >
            <option></option>
            <option value="Yosemite National Park">
              Yosemite National Park
            </option>
            <option value="Yosemite National Park">
              Yosemite National Park
            </option>
            <option value="Grand Canyon National Park">
              Grand Canyon National Park
            </option>
            <option value="Great Smoky Mountains National Park">
              Great Smoky Mountains National Park
            </option>
            <option value="Zion National Park">Zion National Park</option>
            <option value="Rocky Mountain National Park">
              Rocky Mountain National Park
            </option>
            <option value="Acadia National Park">Acadia National Park</option>
            <option value="Olympic National Park">Olympic National Park</option>
            <option value="Grand Teton National Park">
              Grand Teton National Park
            </option>
            <option value="Glacier National Park">Glacier National Park</option>
          </select>

          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Campground
          </InputLabel>
          <select
            color="success"
            focused
            className="form-input"
            placeholder="Select campground"
            name="campground"
            type="campground"
            id="campground"
            value={formState.campground}
            onChange={handleChange}
          >
            <option></option>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
            <options value=""></options>
          </select>
          <br></br>

          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Choose your date
          </InputLabel>

          <TextField
            id="date"
            name="date"
            label="Choose the date of arrival"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formState.date}
            onChange={handleChange}
          />
          <TextField
            label="Expected time of arrival"
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
