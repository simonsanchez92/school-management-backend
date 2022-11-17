"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  Teacher.init(
    {
      id: { type: DataTypes.NUMBER, primaryKey: true },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      join_date: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "Teacher",
      underscored: true,
      timestamps: false,
    }
  );
  return Teacher;
};
