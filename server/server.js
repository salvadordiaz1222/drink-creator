const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log("Server is running on http://localhost:4000");
});
