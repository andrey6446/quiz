/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'OLD MEME CLUB',
          image: '/image/theme1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УГАДАЙ ФИЛЬМЫ',
          image: '/image/theme2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
