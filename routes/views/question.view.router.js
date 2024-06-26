const router = require('express').Router();
const { Theme, Quiz } = require('../../db/models');
const QuestionPage = require('../../components/QuestionPage');

router.get('/:themeId/questions/:questionId/a', async (req, res) => {
  try {
    const { themeId, questionId } = req.params;
    const { user } = res.app.locals;

    const theme = await Theme.findOne({ where: { id: themeId }, include: Quiz });
    const { name, Quizzes } = theme;
    const { length } = Quizzes;
    const quize = Quizzes[questionId - 1];

    if (theme) {
      res.status(200).send(
        res.renderComponent(QuestionPage, {
          questionId,
          themeId,
          name,
          length,
          quize,
          user,
          title: 'Самый лучший квиз!',
        }),
      );
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
