const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    images: String
    phone: String
    email: String
    park: String
    campground: String
    date: String
    time: String
  
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
        addUser(username: String!, images: String!, phone: String!, campground: String!, date: String!, time: String!,
          email: String!, password: String!, park: String!): Auth
      }
  
`;

// export the typeDefs
module.exports = typeDefs;
