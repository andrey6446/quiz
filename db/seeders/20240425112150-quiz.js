/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          question: 'Каким словом хозяин охарактеризовал неудачу своего питомца? ',
          answer: 'фиаско',
          image: '/image/1-1.jpeg',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какое имя нам должно о чём-то говорить?',
          answer: 'Ибрагим',
          image: '/image/1-2.webp',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'За за какое место для посиделок данный персонаж списывает 100 рублей?',
          answer: 'пенек',
          image: '/image/1-3.webp',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Лимур призывает вас к какому-ту действию, что нужно сделать?',
          answer: 'узбагоиться',
          image: '/image/1-4.png',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как звали мальчика из данного мема?',
          answer: 'Саша',
          image: '/image/1-5.jpeg',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какая разборка происходила в данном видео меме?',
          answer: 'Питерская',
          image: '/image/1-6.jpeg',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Чувак, это … ?',
          answer: 'репчик',
          image: '/image/1-7.jpeg',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Про какую профессию был анекдот данного персонажа? ',
          answer: 'повар',
          image: '/image/1-8.webp',
          themeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Катя',
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
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizzes', null, {});
  },
};
