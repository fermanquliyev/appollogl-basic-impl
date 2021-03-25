const { ApolloServer } = require('apollo-server');
const mocks = require('./mocks');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs, mocks: mocks });

server.listen().then((info) => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port ${info.port}
      📭  Query at https://studio.apollographql.com/dev
      `);
});