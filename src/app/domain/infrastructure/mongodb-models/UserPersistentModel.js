function GenerateUsersMongoSchema(injection) {
  const {
    connection,
    Schema,
  } = Object.assign({}, injection);

  const userMongoSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    password: String,
    active: { type: Boolean, default: true },
  }, { timestamps: { createdAt: 'creationDate', updatedAt: 'updateDate' } });

  return connection.model('users', userMongoSchema);
}

module.exports = injection => GenerateUsersMongoSchema(injection);