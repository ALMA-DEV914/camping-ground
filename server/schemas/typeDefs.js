const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    bookings:[Booking]
    friends: [User]
  }
  type Auth {
    token: ID!
    user: User
  }
    type Query {
      me: User
      users: [User]
      user(username: String!): User
      }
      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
      }
  
`;

// export the typeDefs
module.exports = typeDefs;