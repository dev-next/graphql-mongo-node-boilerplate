const MakeParams = async (data, injection) => {
  let newData = Object.assign(data, {});

  if (data.name) {
    newData = {
      ...newData,
      name: { $regex: `${data.name}`, $options: 'i' },
    };
  }

  if (data.email) {
    newData = {
      ...newData,
      email: { $regex: `${data.email}`, $options: 'i' },
    };
  }

  if (data.nameOrEmail) {
    newData = {
      ...newData,
      $or: [
        { email: { $regex: `${data.email}`, $options: 'i' } },
        { name: { $regex: `${data.name}`, $options: 'i' } }
      ]
    };
  }

  return {
    ...newData,
    active: true,
  };
};

module.exports = MakeParams;