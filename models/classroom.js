"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classroom.belongsTo(models.School_year, {
        foreignKey: "school_year_id",
        onDelete: "CASCADE",
      });
      Classroom.belongsTo(models.Division, {
        foreignKey: "division_id",
        onDelete: "CASCADE",
      });
      Classroom.belongsTo(models.Shift, {
        foreignKey: "shift_id",
        onDelete: "CASCADE",
      });

      //Many to many relationship
      Classroom.belongsToMany(models.Student, {
        through: models.Classroom_Student,
      });
    }
  }
  Classroom.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      year: DataTypes.INTEGER,
      school_year_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      shift_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Classroom",
      tableName: "Classroom",
      underscored: true,
      timestamps: false,
    }
  );
  return Classroom;
};
