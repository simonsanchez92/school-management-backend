"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: "role_id",
        onDelete: "CASCADE",
      });

      User.hasOne(models.Admin, {
        foreignKey: "id",
      });

      User.hasOne(models.Teacher, {
        foreignKey: "id",
      });

      User.hasOne(models.Student, {
        foreignKey: "id",
      });
    }
  }
  User.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      last_login: DataTypes.DATE,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
      underscored: true,
    }
  );
  return User;
};
