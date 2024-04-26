const router = require('express').Router();
const { Theme, Quiz } = require('../../db/models');

router.post('/:themeId/questions/:questionId/a', async (req, res) => {
  try {
    const { themeId, questionId } = req.params;
    const { answer } = req.body;
    const { Quizzes } = await Theme.findOne({ where: { id: themeId }, include: Quiz });
    const rightAnswer = Quizzes[questionId - 1].answer;
    if (!res.app.locals.score) {
      res.app.locals.score = 0;
    }
    if (answer.toLowerCase().trim() === rightAnswer.toLowerCase().trim()) {
      res.app.locals.score += 100;
      res
        .status(201)
        .json({ message: 'success', html: `<p>Правильный ответ 💯</p><p>Твои баллы: ${res.app.locals.score}</p>` });
      return;
    }

    res.status(202).json({
      message: 'success',
      html: `<p>Не правильный ответ</p><p>Правльный ответ: ${rightAnswer}</p><p>Твои баллы: ${res.app.locals.score}</p>`,
    });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
