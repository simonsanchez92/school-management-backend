"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.hasOne(models.Timetable, {
        foreignKey: "id",
      });
    }
  }
  Day.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Day",
      tableName: "Day",
      underscored: true,
      timestamps: false,
    }
  );
  return Day;
};
