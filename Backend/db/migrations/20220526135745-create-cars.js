"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plate: {
        type: Sequelize.STRING,
      },
      manufacture: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      rentPerDay: {
        type: Sequelize.INTEGER,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      available: {
        type: Sequelize.BOOLEAN,
      },
      type: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      options: {
        type: Sequelize.STRING,
      },
      specs: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      date: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.STRING,
      },
      passenger: {
        type: Sequelize.INTEGER,
      },
      availableAt: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cars");
  },
};
