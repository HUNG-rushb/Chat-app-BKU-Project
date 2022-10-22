const { gql } = require("apollo-server-lambda");
// Definitions
const userDefs = require("./User_User.js");
const postDefs = require("./Post_Post.js");
// const cmtDefs = require('./Cmt_Cmt.js');

const baseDefs = gql`
  type Query {
    ok: String
    _USELESS_QUERY: String
  }

  type Mutation {
    _USELESS_MUTATION(id: ID!): String!
  }
`;

const typeDefs = [baseDefs, userDefs, postDefs];

module.exports = typeDefs;
