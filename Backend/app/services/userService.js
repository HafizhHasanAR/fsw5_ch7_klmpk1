const userRepository = require("../repositories/userRepository");

module.exports = {
  findById(id) {
    return userRepository.getById(id);
  },
  findByEmail(email) {
    return userRepository.getByEmail(email);
  },
  create(user) {
    return userRepository.create(user);
  },
};