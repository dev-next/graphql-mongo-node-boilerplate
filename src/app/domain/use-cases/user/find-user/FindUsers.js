const dependencies = {
  UserRepository: require('../../../infrastructure/repository/UserRepository'),
  MakeParamsToFind: require('./helpers/MakeParamsToFind'),
};

const FindUsers = async (data, injection) => {
  const {
    UserPersistentModel,
    MakeParamsToFind,
    UserRepository,
  } = Object.assign({}, dependencies, injection);

  try {
    const params = await MakeParamsToFind(data.where || {});

    return new UserRepository(injection, UserPersistentModel).find(params);
  } catch (e) {
    throw new Error('Ops, ocorreu algum erro ao buscar os usuários.' +
      ' Por favor, tente recarregar a página.');
  }
};

module.exports = FindUsers;