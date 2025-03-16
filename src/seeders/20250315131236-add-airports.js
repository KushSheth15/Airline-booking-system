'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airports", [
      {
        id: 1,
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        city_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Kempegowda International Airport",
        code: "BLR",
        city_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Rajiv Gandhi International Airport",
        code: "HYD",
        city_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Chennai International Airport",
        code: "MAA",
        city_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Netaji Subhas Chandra Bose International Airport",
        code: "CCU",
        city_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Surat International Airport",
        code: "STV",
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Pune International Airport",
        code: "PNQ",
        city_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Chaudhary Charan Singh International Airport",
        code: "LKO",
        city_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Raja Bhoj Airport",
        code: "BHO",
        city_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Coimbatore International Airport",
        code: "CJB",
        city_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: "Trivandrum International Airport",
        code: "TRV",
        city_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: "Jay Prakash Narayan International Airport",
        code: "PAT",
        city_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: "Shaheed Bhagat Singh International Airport",
        code: "IXC",
        city_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: "Jaipur International Airport",
        code: "JAI",
        city_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: "Indira Gandhi International Airport",
        code: "DEL",
        city_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Airports", null, {});
  }
};
