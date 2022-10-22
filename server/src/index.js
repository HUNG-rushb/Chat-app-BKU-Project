// Apollo
const { ApolloServer } = require('apollo-server-lambda');
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

// Prisma
const { PrismaClient } = require('@prisma/client');

// Type definitions
const typeDefs = require('./Type_Definitions/_typeDefs.js');

// Resolvers
const Query = require('./resolvers/Query/_Query.js');
const Mutation = require('./resolvers/Mutation/_Mutation.js');
const Subcription = require('./resolvers/Subcription/_Subcription.js');
const Type = require('./resolvers/Type/_Type.js');

// Connect to MongoDB
const prisma = new PrismaClient();
exports.prisma;

// Resolvers
const resolvers = {
  Query,
  Mutation,
  // Subcription,
  ...Type,
};

// The server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// Handler for serverless
exports.graphqlHandler = server.createHandler();
