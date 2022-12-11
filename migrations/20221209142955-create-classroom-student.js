"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classroom_Student", {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      // },
      // classroom_id: {
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      // },
      // student_id: {
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      // },
      // ,
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      classroom_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Classroom",
          key: "id",
          as: "classroom_id",
        },
      },
      student_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Student",
          key: "id",
          as: "student_id",
        },
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Classroom_Student");
  },
};
