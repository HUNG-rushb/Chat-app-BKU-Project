const { gql } = require('apollo-server-lambda');

const userDefs = gql`
  extend type Query {
    users(query: String): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: ID!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input UpdateUserInput {
    name: String
    email: String
    age: Int
  }

  type User {
    id: ID!
    email: String!
    name: String!
    age: Int
    posts: [Post!]!
    # comments: [Comment!]!
  }
`;

module.exports = userDefs;
