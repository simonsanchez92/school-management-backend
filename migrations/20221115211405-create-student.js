"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Student", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      join_date: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "User",
          key: "id",
          as: "user_id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Student");
  },
};
