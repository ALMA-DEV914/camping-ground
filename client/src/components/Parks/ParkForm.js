import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PARK } from "../../utils/mutations";
import { QUERY_PARKS, QUERY_ME } from "../../utils/queries";
import { Container } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import { default as data } from "../../data.json";
import { TextField } from "@mui/material";

const ParkForm = () => {
  const [parkArea, setParkArea] = useState("");
  const [campDate, setCampDate] = useState("");

  const [addPark, { error }] = useMutation(ADD_PARK, {
    update(cache, { data: { addPark } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { parks } = cache.readQuery({ query: QUERY_PARKS });
        cache.writeQuery({
          query: QUERY_PARKS,
          data: { parks: [addPark, ...parks] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, parks: [...me.parks, addPark] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    setParkArea(event.target.value);
    setCampDate(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPark({
        variables: { parkArea, campDate },
      });

      // clear form value
      setParkArea("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="reviews">
      <h1>Add new booking</h1>
      {error && <span className="ml-2"> Something went wrong...</span>}

      <br></br>
      <Container>
        <form className="park-form" onSubmit={handleFormSubmit}>
          <div className="select">
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" className="label">
                Park and Campground
              </InputLabel>
              {data.map((data) => (
                <select
                  placeholder="Choose your park and campgrounds"
                  value={parkArea}
                  onChange={handleChange}
                >
                  {data.campgrounds.map((campgrounds, i) => (
                    <option key={i} value={[data.name, " ", campgrounds.campName]}>
                      {[data.name, " ", campgrounds.campName]}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          </div>
          <br></br>

          <InputLabel shrink htmlFor="bootstrap-input" className="label">
            Add the date of camping here...
          </InputLabel>
          <div className="booking-form">
            <TextField
              placeholder="Add the date of camping here..."
              value={campDate}
              focused
              color="success"
              className="form-input"
              onChange={handleChange}
            />
            <button className="booking-btn" type="submit" id="btn">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ParkForm;
