"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("ClassroomStudent", {
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
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("ClassroomStudent");
  },
};
