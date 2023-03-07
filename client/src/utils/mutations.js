import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $phone: String!, $email: String!, $park: String!, $campground: String!, $date: String!, $time: String!, $password: String!) {
    addUser(username: $username, phone: $phone, email: $email, park: $park, campground: $campground, date: $date, time: $time, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

