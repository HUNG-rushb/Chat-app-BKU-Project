const userQuery = {
  users(parent, args, { prisma }, info) {
    // if (!args.query) {
    //   return db.users;
    // }
    // return db.users.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase());
    // });
  },
};

module.exports = userQuery;
