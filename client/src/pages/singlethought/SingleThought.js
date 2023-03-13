import React from "react";
import { useParams } from "react-router-dom";
import ReactionList from "../../components/thought/ReactionList";
import ReactionForm from "../../components/thought/ReactionForm";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../../utils/queries";
import image from "../../images/1.jpg";
import image1 from "../../images/2.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/header.png";
import profile from "../../images/profile.png";
import TopNav from "../../components/navbar/Navbar";

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
    <>
      <TopNav />
      <div className="container mt-4">
        <div className="reviews-section mt-3 p-2">
          <div className="col-lg-10 mb-3">
            <div className="singlethought">
              <img key={thought._id} src={profile} alt="profile" id="profile" />
              <div>
                <span style={{ fontWeight: 700 }} className="text-dark">
                  <h4>{thought.username}</h4>
                </span>{" "}
                <span className="text-username">
                  feedback on {thought.createdAt}
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="reviews-images">
                <img src={image3} alt=""></img>
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
    </>
  );
};

export default SingleThought;
