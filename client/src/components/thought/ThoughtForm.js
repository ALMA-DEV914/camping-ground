import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";
import { Container } from "@mui/system";

const ThoughtForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 500) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addThought({
        variables: { thoughtText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="reviews">
      <h1>Leave a Reviews</h1>
      <span>The following are comments from users about their experiences with our service. Some of these notes come from social networks, but most are direct messages sent to us by our members. We’re happy that our little app has helped so many campers access otherwise sold-out campsites. Hopefully you’ll experience the same! Got a Campnab review to share? </span><br></br><br></br>
      <p className={`m-0 ${characterCount === 500 || error ? "text-error" : ""}`}
      >
       Create Post-Reviews: {characterCount}/500 characters
        {error && <span className="ml-2"> Something went wrong...</span>}
      </p>
      <br></br>
      <Container>
      <form
        className="reviews-form"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new review or post..."
          value={thoughtText}
          className="form-input"
          onChange={handleChange}
        ></textarea>

        <button className="btn" type="submit" id="btn">
          Submit
        </button>
      </form>
      </Container>
    </div>
  );
};

export default ThoughtForm;
