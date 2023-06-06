const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Thought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
  reactions: [Reaction]
}
type Park {
  _id: ID
  parkArea: String
  createdAt: String
  username: String
}
type Booking {
  _id: ID
  park: Park
  user: User
  createdAt: String
  
}
type User {
    _id: ID
    username: String
    phone: String
    email: String
    parks: [Park]
    thoughts: [Thought]
  
  }
  type Auth {
    token: ID!
    user: User
  }
  

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
    type Query {
      me: User
      users: [User]
      user(username: String!): User
      thoughts(username: String): [Thought]
      thought(_id: ID!): Thought
      parks(username: String): [Park]
      park(_id: ID!): Park
      }
      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, phone: String!, email: String!, password: String!): Auth
        addThought(thoughtText: String!): Thought
        addPark(parkArea: String!): Park
        addReaction(thoughtId: ID!, reactionBody: String!): Thought
      }
  
`;

// export the typeDefs
module.exports = typeDefs;
