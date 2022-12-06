"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class School_year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      School_year.hasMany(models.Classroom, {
        foreignKey: "id",
      });
    }
  }
  School_year.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },

      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "School_year",
      tableName: "School_year",
      underscored: true,
      timestamps: false,
    }
  );
  return School_year;
};
