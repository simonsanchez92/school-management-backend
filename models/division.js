"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Division.hasMany(models.Clasroom, {
        foreignKey: "id",
      });
    }
  }
  Division.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Division",
      tableName: "Division",
      underscored: true,
      timestamps: false,
    }
  );
  return Division;
};
