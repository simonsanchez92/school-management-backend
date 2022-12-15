"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subject.belongsTo(models.School_year, {
        foreignKey: "school_year_id",
        onDelete: "CASCADE",
      });
    }
  }
  Subject.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      description: DataTypes.STRING,
      school_year_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Subject",
      tableName: "Subject",
      underscored: true,
      timestamps: false,
    }
  );
  return Subject;
};
