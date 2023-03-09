const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    phone: String
    email: String
    park: String
    campground: String
    date: String
    time: String
    thoughts: [Thought]
  
  }
  type Auth {
    token: ID!
    user: User
  }
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
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
        addUser(username: String!, images: String!, phone: String!, campground: String!, date: String!, time: String!,
          email: String!, password: String!, park: String!): Auth
        addThought(thoughtText: String!): Thought
        addReaction(thoughtId: ID!, reactionBody: String!): Thought
      }
  
`;

// export the typeDefs
module.exports = typeDefs;
