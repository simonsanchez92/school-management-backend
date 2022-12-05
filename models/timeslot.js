"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TimeSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TimeSlot.init(
    {
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TimeSlot",
      tableName: "TimeSlot",
      underscored: true,
      timestamps: false,
    }
  );
  return TimeSlot;
};
