import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentsIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ThoughtForm from "../../components/thought/ThoughtForm";
import ThoughtList from "../../components/thought/ThoughtList";

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
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Link to="/profile" />;
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
      <Button color="inherit" href="/">
        <ReplyAllIcon /> Back to home
      </Button>
      <div className="profile">
        <CardHeader
          avatar={<Avatar></Avatar>}
          title={useParams ? `${user.username}` : "Hello"}
        />
        <CardContent>
          <p>Email: {user.email}</p>
          <p> Contact#: {user.phone}</p>
          <p>Park to camp: {user.park}</p>
          <p> Campground: {user.campground}</p>
          <p>
            Date of arrival: {user.date} - {user.time}
          </p>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </CardContent>
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
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s reviews...`}
          /><br></br>
          <div className="textarea">{!userParam && <ThoughtForm />}</div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;
