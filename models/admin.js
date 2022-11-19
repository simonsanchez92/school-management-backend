"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  Admin.init(
    {
      id: { type: DataTypes.NUMBER, primaryKey: true },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Admin",
      tableName: "Admin",
      underscored: true,
      timestamps: false,
    }
  );
  return Admin;
};
