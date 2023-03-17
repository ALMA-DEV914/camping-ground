import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import profile2 from "../../images/profilesub.png";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentsIcon from "@mui/icons-material/ExpandMore";
import TopNav from "../../components/navbar/Navbar";
import ThoughtForm from "../../components/thought/ThoughtForm";
import ThoughtList from "../../components/thought/ThoughtList";
import { Container } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import ParkForm from "../../components/Parks/ParkForm";
import ParkList from "../../components/Parks/ParkList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Profile = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data?.username === userParam) {
    return <Link to={`{/profile/${user.username}`} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <>
      <TopNav />
      <Container>
        <div className="profile-container">
          <div className="div-profile">
            <div className="left-profile">
              <img src={profile2} alt="profile" className="profile" />
              <p>
                <Link
                  to={`/profile/${user.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-info"
                >
                  {user?.username}
                  <br></br>
                </Link>
              </p>
              <Typography>
                <MailIcon /> {user?.email}
                <br></br>
                <CallIcon /> {user?.phone}
                <br></br>
              </Typography>
              <br></br>
            </div>
            <div className="right-profile">
              <CardContent className="profile-info">
                <Typography variant="body2" color="text.secondary">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Typography>
                <Container>{!userParam && <ThoughtForm />}</Container>
                <Container>{!userParam && <ParkForm />}</Container>
              </CardContent>
            </div>
          </div>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentsIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className="booking-section">
            <ParkList parks={user.parks} title={user.username
                  ? "Your booking history"
                  : `${user.username}'s reviews...`
              }/>
              </div><br></br>
            <ThoughtList
              thoughts={user?.thoughts}
              title={
                user?.username
                  ? "Your reviews history"
                  : `${user?.username}'s reviews...`
              }
            />
          </Collapse>
        </div>
      </Container>
    </>
  );
};

export default Profile;
