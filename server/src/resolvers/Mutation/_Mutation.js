const userMutation = require('./user.js');
const postMutation = require('./post.js');
// const commentMutation = require('./comment.js');

const Mutation = {
  // User
  ...userMutation,
  // Post
  ...postMutation,
  // Comment
  // ...commentMutation,
};

module.exports = Mutation;
