'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quizzes', [{
      question: 'Johnn Doe 1',
      answer: 'false',
      image: 's',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'John Doe 2',
      answer: 'false',
      image: 's',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'John Doe 3',
      answer: 'false',
      image: 's',
      themeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'John Doe 4',
      answer: 'false',
      image: 's',
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'John Doe 5',
      answer: 'false',
      image: 's',
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'John Doe 6',
      answer: 'false',
      image: 's',
      themeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizzes', null, {});

  }
};
