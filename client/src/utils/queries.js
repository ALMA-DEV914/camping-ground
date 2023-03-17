import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_PARKS = gql`
  query parks($username: String) {
    parks(username: $username) {
      _id
      parkArea
      createdAt
      username
      
    }
  }
`;
export const QUERY_PARK = gql`
  query park($username: String) {
    park(username: $username) {
      _id
      parkArea
      createdAt
      username
      
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      phone
      email
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
      parks{
        _id
        parkArea
        createdAt
        username
        
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      phone
      email
      parks{
        _id
        parkArea
        createdAt
        
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      phone
      email
    }
  }
`;
