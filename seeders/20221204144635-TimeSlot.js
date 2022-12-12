"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("TimeSlot", [
      {
        start_time: "7:30",
        end_time: "8:45",
        shift_id: 1,
      },
      {
        start_time: "9:00",
        end_time: "10:15",
        shift_id: 1,
      },
      {
        start_time: "10:30",
        end_time: "11:45",
        shift_id: 1,
      },
      {
        start_time: "12:00",
        end_time: "13:15",
        shift_id: 1,
      },

      {
        start_time: "14:00",
        end_time: "15:15",
        shift_id: 2,
      },
      {
        start_time: "15:30",
        end_time: "16:45",
        shift_id: 2,
      },
      {
        start_time: "17:00",
        end_time: "18:15",
        shift_id: 2,
      },
      {
        start_time: "18:30",
        end_time: "19:45",
        shift_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("TimeSlot", null, {});
  },
};
