import Query from './Query/_Query.js';
import Mutation from './Mutation/_Mutation.js';
// import Subcription from './Subcription/_Subcription.js';
import Type from './Type/_Type.js';

const resolvers = {
  Query,
  Mutation,
  // Subcription,
  ...Type,
};

export default resolvers;
