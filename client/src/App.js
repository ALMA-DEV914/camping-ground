import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampingGround from "./pages/campground/CampingGround";
import Home from "./pages/home/Home";
import Reviews from "./pages/reviews/Reviews";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/campgrounds" element={<CampingGround />} />
          <Route exact path="/reviews" element={<Reviews/>} />
         <Route exact path="/login" element={<Login/>} />
         <Route exact path="/signup" element={<Signup/>} />
         <Route exact path="/profile" element={<Profile/>} />
         </Routes>
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
