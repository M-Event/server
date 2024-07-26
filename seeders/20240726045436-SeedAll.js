"use strict";
const { hashPassword, comparePassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = require("../data/users.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hashPassword(el.password);
      return el;
    });

    let categories = require("../data/categories.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    let events = require("../data/events.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.location = Sequelize.fn("ST_GeomFromText", `POINT(${el.location.long} ${el.location.lat})`);
      return el;
    });

    await queryInterface.bulkInsert("Users", users);
    await queryInterface.bulkInsert("Categories", categories);
    await queryInterface.bulkInsert("Events", events);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("User", null, {});
  },
};
