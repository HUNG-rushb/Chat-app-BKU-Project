const { gql } = require('apollo-server-lambda');

const postDefs = gql`
  extend type Query {
    post: Post!
    posts(query: String): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    updatePost(id: ID!, data: UpdatePostInput!): Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    author: User!
    # comments: [Comment!]!
  }
`;

module.exports = postDefs;
