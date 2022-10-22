const userQuery = require("./USER.js");
const postQuery = require("./POST.js");
// const commentQuery = require('./COMMENT.js');

const Query = {
  ok: () => "OK",
  // User
  ...userQuery,
  // Post
  ...postQuery,
  // Comment
  // ...commentQuery,
};

module.exports = Query;
