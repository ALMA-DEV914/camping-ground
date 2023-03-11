import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/1.jpg";
import image1 from "../../images/2.jpg";
import image2 from "../../images/2.png";

const ThoughtList = ({ thoughts, title}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData.results);
    })();
  }, []);

  if (!thoughts) {
    return <h3>No Reviews Yet</h3>;
  }
  

  return (
  <>
    <div className='card-review'>
      <h4>{title}</h4>
      
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="mb-3">
            <div className="card-header">
            {users.map((user, i) => 
              <img  key={i} src={user.picture.large}  alt="profile" id='profile'></img>)}
              <p style={{ fontWeight: 700 }}
                className="text-username"
              >
                {thought.username}
              {' '} feedback on {thought.createdAt}</p>
            </div>
            <div className="card-body">
              <div className='reviews-images'>
              <img src={image} alt=""></img>
              <img src={image1} alt=""></img>
              <img src={image2} alt=""></img>
              </div>
            <p>{thought.thoughtText}</p>
              <Link to={`/thought/${thought._id}`}>
                <p className="reaction-link">
                  Comments: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'see' : 'add'} a comments!
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
