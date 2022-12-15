"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Timetable", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Classroom",
          key: "id",
          as: "classroom_id",
        },
      },
      day_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Day",
          key: "id",
          as: "day_id",
        },
      },
      subject_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Subject",
          key: "id",
          as: "subject_id",
        },
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Teacher",
          key: "id",
          as: "teacher_id",
        },
      },
      time_slot_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "TimeSlot",
          key: "id",
          as: "time_slot_id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Timetable");
  },
};
