const { gql } = require('apollo-server-express');

const typeDefs = gql`
  """Object Type that represents a User"""
  type User {
    id: ID
    name: String
    email: String
    creationDate: DateTime
    updateDate: DateTime
    active: Boolean
  }

  input UserInput {
    userId: ID
    name: String
    emial: String
  }

  input UserWhereInput {
    name: String
    email: String
    nameOrEmail: String
  }
`;

const resolvers = {
  User: {
    // APPROACH TO TRANSFORM POSSIBLE _id RECEIVED FROM MONGODB DATABASE
    id: root => root._id || root.id,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};