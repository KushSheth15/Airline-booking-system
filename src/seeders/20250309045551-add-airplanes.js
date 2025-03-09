'use strict';

const {Op} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:'airbus 380',
        capacity:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber:'boing 777',
        capacity:450,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',{[Op.or]:[{modelNumber:'airbus 380'},{modelNumber:'boing 777'}]});
  }
};
