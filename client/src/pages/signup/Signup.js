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
    images: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);
  
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    const { park, campground} = event.target.value;
   
    
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
          <div className="select">
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" className="label">
                Park
              </InputLabel>
              <select
                focused
                color="success"
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
                <option value="Acadia National Park">
                  Acadia National Park
                </option>
                <option value="Olympic National Park">
                  Olympic National Park
                </option>
                <option value="Grand Teton National Park">
                  Grand Teton National Park
                </option>
                <option value="Glacier National Park">
                  Glacier National Park
                </option>
              </select>
            </div>
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" className="label">
                Campground
              </InputLabel>
              <select
                focused
                color="success"
                className="form-input"
                placeholder="Select campground"
                name="campground"
                type="campground"
                id="campground"
                value={formState.campground}
                onChange={handleChange}
              >
                <option></option>
                <option value="North Pines Campground">
                  North Pines Campground
                </option>
                <option value="Upper Pines Campground">
                  Upper Pines Campground
                </option>
                <option value="Lower Pines Campground">
                  Lower Pines Campground
                </option>
                <option value="Camp 4">Camp 4</option>
                <option value="Tuolumne Meadows Campground">
                  Tuolumne Meadows Campground
                </option>
                <option value="Summerdale Campground">
                  Summerdale Campground
                </option>
                <option value="Wawona Campground">Wawona Campground</option>
                <option value="Hodgdon Meadow Campground">
                  Hodgdon Meadow Campground
                </option>
                <option value="Tents and Cabins at Curry Village">
                  Tents and Cabins at Curry Village
                </option>
                <option value="Indian Creek Campground">
                  Indian Creek Campground
                </option>
                <option value="Canyon Campground">Canyon Campground</option>
                <option value="Madison Campground">Madison Campground</option>
                <option value="Norris Campground">Norris Campground</option>
                <option value="Grant Village Campground">
                  Grant Village Campground
                </option>
                <option value="Fishing Bridge RV Park">
                  Fishing Bridge RV Park
                </option>
                <option value="Bridge Bay Campground">
                  Bridge Bay Campground
                </option>
                <option value="Mammoth Campground">Mammoth Campground</option>
                <option value="Indian Creek Campground">
                  Indian Creek Campground
                </option>

                <option value="Mather Campground">Mather Campground</option>
                <option value="Desert View Campground">
                  Desert View Campground
                </option>
                <option value="Trailer Village Campground">
                  Trailer Village Campground
                </option>
                <option value="North Rim Campground">
                  North Rim Campground
                </option>
                <option value="Indian Garden  (Backcountry)">
                  Indian Garden (Backcountry)
                </option>
                <option value="Bright Angel  (Backcountry)">
                  Bright Angel (Backcountry)
                </option>
                <option value="Ten-X">Ten-X</option>
                <option value="Cottonwood Campground">
                  Cottonwood Campground
                </option>
                <option value="Cades Cove Campground - Tennessee">
                  Cades Cove Campground - Tennessee
                </option>
                <option value="Elkmont Campground - Tennessee">
                  Elkmont Campground - Tennessee
                </option>
                <option value="Cataloochee Campground - North Carolina">
                  Cataloochee Campground - North Carolina
                </option>
                <option value="Smokemont Campground -  North Carolina">
                  Smokemont Campground - North Carolina
                </option>
                <option value="Cosby Campground">Cosby Campground</option>
                <option value="Big Creek Campground">
                  Big Creek Campground
                </option>
                <option value="South Campground">South Campground</option>
                <option value="Watchman Campground">Watchman Campground</option>
                <option value="Zion Canyon Campground and RV Resort">
                  Zion Canyon Campground and RV Resort
                </option>
                <option value="Zion River Resort RV Park & Campground">
                  Zion River Resort RV Park & Campground
                </option>
                <option value="Lava Point Campground">
                  Lava Point Campground
                </option>
                <option value="Coral Pink Sand Dunes State Park">
                  Coral Pink Sand Dunes State Park
                </option>
                <option value="Hi-Road Campground">Hi-Road Campground</option>
                <option value="Dispersed Camping on BLM Lands Close to the Park">
                  Dispersed Camping on BLM Lands Close to the Park
                </option>
                <option value="Timber Creek Campground - Grand Lake">
                  Timber Creek Campground - Grand Lake
                </option>
                <option value="Longs Peak Campground - Estes Park">
                  Longs Peak Campground - Estes Park
                </option>
                <option value="Yogi Bear’s Jellystone Park - Estes Park">
                  Yogi Bear’s Jellystone Park - Estes Park
                </option>
                <option value="Moraine Park Campground - Estes Park">
                  Moraine Park Campground - Estes Park
                </option>
                <option value="Glacier Basin Campground - Estes Park">
                  Glacier Basin Campground - Estes Park
                </option>
                <option value="Aspenglen Campground - Estes Park">
                  Aspenglen Campground - Estes Park
                </option>
                <option value="Fern Lake Campsite - Estes Park">
                  Fern Lake Campsite - Estes Park
                </option>
                <option value="Estes Park KOA Holiday - Estes Park">
                  Estes Park KOA Holiday - Estes Park
                </option>
                <option value="Estes Park Campground at East Portal - Estes Park">
                  Estes Park Campground at East Portal - Estes Park
                </option>
                <option value="Estes Park Campground at Marys Lake - Estes Park">
                  Estes Park Campground at Marys Lake - Estes Park
                </option>
                <option value="Manor RV Park - Estes Park">
                  Manor RV Park - Estes Park
                </option>
                <option value="Hermits Hollow Campground - Estes Park">
                  Hermits Hollow Campground - Estes Park
                </option>
                <option value="Schoodic Woods Campground">
                  Schoodic Woods Campground
                </option>
                <option value="Seawall Campground">Seawall Campground</option>
                <option value="Blackwoods Campground">
                  Blackwoods Campground
                </option>
                <option value="Duck Harbor Campground">
                  Duck Harbor Campground
                </option>
                <option value="Mount Desert Island Campground">
                  Mount Desert Island Campground
                </option>
                <option value="Smuggler’s Den campground">
                  Smuggler’s Den campground
                </option>
                <option value="Deer Park Campground">
                  Deer Park Campground
                </option>
                <option value="Dosewallips Campground (Walk-In Only)">
                  Dosewallips Campground (Walk-In Only)
                </option>
                <option value="Fairholme Campground">
                  Fairholme Campground
                </option>
                <option value="Graves Creek Campground">
                  Graves Creek Campground
                </option>
                <option value="Heart O’ the Hills Campground">
                  Heart O’ the Hills Campground
                </option>
                <option value="Hoh Campground">Hoh Campground</option>
                <option value="Kalaloch Campground">Kalaloch Campground</option>
                <option value="Mora Campground">Mora Campground</option>
                <option value="North Fork Campground">
                  North Fork Campground
                </option>
                <option value="Ozette Campground">Ozette Campground</option>
                <option value="Queets Campground">Queets Campground</option>
                <option value="South Beach Campground">
                  South Beach Campground
                </option>
                <option value="Colter Bay Campground">
                  Colter Bay Campground
                </option>
                <option value="Colter Bay RV Park">Colter Bay RV Park</option>
                <option value="Gros Ventre Campground">
                  Gros Ventre Campground
                </option>
                <option value="Headwaters Campground">
                  Headwaters Campground
                </option>
                <option value="Jenny Lake Campground">
                  Jenny Lake Campground
                </option>
                <option value="Lizard Creek Campground">
                  Lizard Creek Campground
                </option>
                <option value="Signal Mountain Campground">
                  Signal Mountain Campground
                </option>
                <option value="Many Glacier Campground">
                  Many Glacier Campground
                </option>
                <option value="Canyon Campground">Canyon Campground</option>
                <option value="Two Medicine Campground">
                  Two Medicine Campground
                </option>
                <option value="St Mary Campground">St Mary Campground</option>
                <option value="Apgar Campground">Apgar Campground</option>
                <option value="Fish Creek Campground">
                  Fish Creek Campground
                </option>
                <option value="Avalanche Campground">
                  Avalanche Campground
                </option>
                <option value="Sprague Creek Campground">
                  Sprague Creek Campground
                </option>
              </select>
            </div>
          </div>
          <br></br>
          <div className="select-date">
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" className="label">
                Choose your date of arrival
              </InputLabel>

              <TextField
                color="success"
                id="date"
                name="date"
                type="date"
                value={formState.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" className="label">
                Choose your time of arrival
              </InputLabel>
              <TextField
                color="success"
                type="time"
                name="time"
                id="time"
                value={formState.time}
                onChange={handleChange}
              />
            </div>
          </div>

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
