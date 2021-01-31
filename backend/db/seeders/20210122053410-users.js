'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'william@user.io',
        username: 'William',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'andrew@user.io',
        username: 'Andrew',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'taten@user.io',
        username: 'Taten',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'jesse@user.io',
        username: 'Jesse',
        hashedPassword: bcrypt.hashSync('password'),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
