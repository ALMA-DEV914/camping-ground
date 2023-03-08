
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
     images
      phone
      email
      park
      campground
      date
      time
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
     images
      phone
      email
      park
      campground
      date
      time
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
     images
      phone
      email
      park
      campground
      date
      time
    }
  }
`;