import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/1.jpg";
import image1 from "../../images/2.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/header.png";
import profile from "../../images/profile.png";

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <>
      <div className="card-review">
        <h4>{title}</h4>
        {thoughts &&
          thoughts.map((thought) => (
            <div key={thought._id} className="mb-3">
              <div className="card-header">
                <img
                  key={thought._id}
                  src={profile}
                  alt="profile"
                  id="profile"
                ></img>
                <p style={{ fontWeight: 700 }} className="text-username">
                  {thought.username} feedback on {thought.createdAt}
                </p>
              </div>
              <div className="card-body">
                <div className="reviews-images">
                  <img src={image1} alt=""></img>
                  <img src={image2} alt=""></img>

                  <img src={image} alt=""></img>
                  <img src={image3} alt=""></img>
                </div>
                <p>{thought.thoughtText}</p>
                <Link to={`/thought/${thought._id}`}>
                  <p className="reaction-link">
                    Comments: {thought.reactionCount} || Click to{" "}
                    {thought.reactionCount ? "see" : "add"} a comments!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ThoughtList;
