"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  Student.init(
    {
      id: { type: DataTypes.NUMBER, primaryKey: true },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      join_date: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      user_id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "Student",
      underscored: true,
    }
  );
  return Student;
};
