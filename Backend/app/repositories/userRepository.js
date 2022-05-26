const { Users } = require("../models");

module.exports = {
  getById(id) {
    return Users.findByPk(id);
  },
  getByEmail(email) {
    return Users.findOne({
      where: {
        email,
      },
    });
  },
  create(user) {
    return Users.create({
      name: user.name,
      email: user.email,
      encryptedPassword: user.encryptedPassword,
      registeredVia: user.registeredVia,
      type_user: user.type_user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
};
