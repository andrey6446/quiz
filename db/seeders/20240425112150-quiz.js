/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          question: 'Каким словом хозяин охарактеризовал неудачу своего питомца?',
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
          question: 'Угадайте название фильма',
          answer: 'шоу трумана',
          image: '/image/2-1.png',
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'сияние',
          image: '/image/2-2.svg',
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'титаник',
          image: '/image/2-3.jpg',
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'заводной апельсин',
          image: '/image/2-4.jpg',
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'властелин колец',
          image: '/image/2-5.svg',
          themeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'матрица',
          image: '/image/2-6.svg',
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
