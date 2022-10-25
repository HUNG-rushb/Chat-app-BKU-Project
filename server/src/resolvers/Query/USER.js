const userQuery = {
  // user(parent, args, { prisma }, info) {
  //   return prisma.user.findMany();
  // },
  allUsers: async (parent, args, { prisma }, info) => {
    const result = await prisma.user.findMany();
    return result;
  },
};

export default userQuery;
