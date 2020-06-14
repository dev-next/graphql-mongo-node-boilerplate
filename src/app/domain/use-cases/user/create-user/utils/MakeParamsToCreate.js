const dependencies = {
  bcrypt: require('bcrypt'),
};

const MakeParams = async (data, injection) => {
  const { bcrypt } = Object.assign({}, dependencies, injection);

  const newData = Object.assign(data, {});

  return newData;
};

module.exports = MakeParams;