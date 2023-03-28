const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const path = require("path");
const db = require("./config/conection");
// This is your test secret API key.

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

db.once("open", () => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
