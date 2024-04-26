const router = require('express').Router();
const ThemePage = require('../../components/ThemesPage');
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  if (!res.app.locals.score) {
    res.app.locals.score = 0;
  }
  const { score } = res.app.locals;
  try {
    const themes = await Theme.findAll();
    const { user } = res.app.locals;
    if (themes) {
      res.status(200).send(res.renderComponent(ThemePage, { score, themes, user, title: 'Самый лучший квиз!' }));
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
