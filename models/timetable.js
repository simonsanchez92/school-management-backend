"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Timetable.belongsTo(models.Classroom, {
        foreignKey: "classroom_id",
        onDelete: "CASCADE",
      });
      Timetable.belongsTo(models.Day, {
        foreignKey: "day_id",
        onDelete: "CASCADE",
      });
      Timetable.belongsTo(models.TimeSlot, {
        foreignKey: "time_slot_id",
        onDelete: "CASCADE",
      });
      Timetable.belongsTo(models.Subject, {
        foreignKey: "subject_id",
        onDelete: "CASCADE",
      });
      Timetable.belongsTo(models.Teacher, {
        foreignKey: "teacher_id",
        onDelete: "CASCADE",
      });
    }
  }
  Timetable.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      classroom_id: DataTypes.INTEGER,
      day_id: DataTypes.INTEGER,
      subject_id: DataTypes.INTEGER,
      teacher_id: DataTypes.INTEGER,
      time_slot_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Timetable",
      tableName: "Timetable",
      underscored: true,
      timestamps: false,
    }
  );
  return Timetable;
};
