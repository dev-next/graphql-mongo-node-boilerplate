const { gql } = require('apollo-server-express');
const FindUsers = require('../../../domain/use-cases/user/find-user/FindUsers');
const FindUser = require('../../../domain/use-cases/user/find-user/FindUser');

const typeDefs = gql`
  extend type Query {
  """Query to find all active sellers from application"""
    user(
      userId: ID!
    ): User
    users(
      where: UserWhereInput
    ): [User]
  }
`;

const resolvers = {
  Query: {
    user: (
      root,
      data,
      {
        db: { UserPersistentModel },
        UserLogged,
      },
    ) => FindUser(data, {
      UserPersistentModel,
      UserLogged,
    }),

    users: (
      root,
      data,
      {
        db: { UserPersistentModel },
        UserLogged,
      },
    ) => FindUsers(data, {
      UserPersistentModel,
      UserLogged,
    }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};