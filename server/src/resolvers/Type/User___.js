const User = {
  posts(parent, args, { prisma }, info) {
    // return db.posts.filter((post) => {
    //   return post.author === parent.id;
    // });
  },
  // comments(parent, args, { prisma }, info) {
  //   return db.comments.filter((comment) => {
  //     return comment.author === parent.id;
  //   });
  // },
};

module.exports = User;
