"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classroom", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      school_year_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "School_year",
          key: "id",
          as: "school_year_id",
        },
      },
      division_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Division",
          key: "id",
          as: "division_id",
        },
      },
      shift_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Shift",
          key: "id",
          as: "shift_id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Classroom");
  },
};
