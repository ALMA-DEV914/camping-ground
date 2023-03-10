import React from "react";
import { useParams } from "react-router-dom";

import ReactionList from "../../components/thought/ReactionList";
import ReactionForm from "../../components/thought/ReactionForm";

import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../../utils/queries";
import image from "../../images/1.jpg"
import image1 from "../../images/2.jpg"
import image2 from "../../images/2.png"

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
    <div className="reviews-section mt-3 p-2">
      <div className="col-lg-12 mb-3">
        <span style={{ fontWeight: 700 }} className="text-dark">
          <h4>{thought.username}</h4>
        </span>{" "}
        <span className="text-username">feedback on {thought.createdAt}</span>
        <div className="card-body">
        <div className='reviews-images'>
              <img src={image} alt=""></img>
              <img src={image1} alt=""></img>
              <img src={image2} alt=""></img>
              </div>
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      <div className="col-lg-10 mx-auto">
        {thought.reactionCount > 0 && (
          <ReactionList reactions={thought.reactions} />
        )}
      </div>
    {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />}
    </div>
    </div>
  );
};

export default SingleThought;
