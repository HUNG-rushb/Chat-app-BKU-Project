const commentQuery = {
  comments(parent, args, { db }, info) {
    return db.comments;
  },
};

module.exports = commentQuery;
