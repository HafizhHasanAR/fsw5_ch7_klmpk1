"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Users.belongsTo(models.Type_Users, {
                foreignKey: "type_user",
            });
        }
    }
    Users.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            encryptedPassword: DataTypes.STRING,
            googleId: DataTypes.STRING,
            registeredVia: DataTypes.STRING,
            type_user: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Users",
        }
    );
    return Users;
};
