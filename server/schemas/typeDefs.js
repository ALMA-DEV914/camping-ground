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

  type User {
    _id: ID
    username: String
    phone: String
    email: String
    park: String
    date: String
    time: String
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
      }
      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, phone: String!, date: String!, time: String!, email: String!, password: String!, park: String!): Auth
        addThought(thoughtText: String!): Thought
        addReaction(thoughtId: ID!, reactionBody: String!): Thought
      }
  
`;

// export the typeDefs
module.exports = typeDefs;
