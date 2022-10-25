// Apollo
import { ApolloServer } from 'apollo-server';
// Prisma
import { PrismaClient } from '@prisma/client';
// Type definitions and resolvers
import typeDefs from './Type_Definitions/_typeDefs.js';
import resolvers from './resolvers/resolvers.js';

// Connect to MongoDB
export const prisma = new PrismaClient();

// The server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { prisma };
  },
  cors: {
    origin: '*', // <- allow request from all domains
    credentials: true, // <- enable CORS response for requests with credentials (cookies, http authentication)
  },
  // csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});
