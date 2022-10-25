import gql from 'graphql-tag';

const userDefs = gql`
  extend type Query {
    # user(query: String): [User!]!
    allUsers: [User!]!
  }

  extend type Mutation {
    createUser: User!
    # createUser(data: CreateUserInput!): User!
    # deleteUser(id: ID!): User!
    # updateUser(id: ID!, data: UpdateUserInput!): User!
  }

  # input CreateUserInput {
  #   name: String!
  #   # email: String!
  #   # age: Int
  # }

  # input UpdateUserInput {
  #   name: String
  #   email: String
  #   age: Int
  # }

  type User {
    id: ID!
    # email: String!
    name: String!
    # age: Int
    # posts: [Post!]!
    # comments: [Comment!]!
  }
`;

export default userDefs;
