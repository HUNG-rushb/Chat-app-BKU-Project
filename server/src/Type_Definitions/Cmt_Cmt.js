const { gql } = require('apollo-server-lambda');

const cmtDefs = gql`
  extend type Query {
    comments: [Comment!]!
  }

  extend type Mutation {
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
    updateComment(id: ID!, data: UpdateCommentInput!): Comment!
  }

  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
  }

  input UpdateCommentInput {
    text: String
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;

module.exports = cmtDefs;
