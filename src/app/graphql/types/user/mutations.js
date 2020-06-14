const { gql, UserInputError } = require('apollo-server-express');
const CreateUser = require('../../../domain/use-cases/user/create-user/CreateUser');

const typeDefs = gql`
  extend type Mutation {
    createUser(
      user: UserInput!
    ): User
  }
`;

const resolvers = {
  Mutation: {
    createUser: (
      root,
      data,
      {
        db: { UserPersistentModel },
      },
    ) => {
      if (!data.user) {
        throw new UserInputError('Dados inválidos', {
          invalidArgs: 'usuário',
        });
      }

      return CreateUser(data, { UserPersistentModel });
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};