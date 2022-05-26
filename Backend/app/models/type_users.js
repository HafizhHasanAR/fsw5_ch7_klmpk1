"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Type_Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Type_Users.hasMany(models.Users, {
                foreignKey: "type_user",
            });
        }
    }
    Type_Users.init(
        {
            type_user: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Type_Users",
        }
    );
    return Type_Users;
};
