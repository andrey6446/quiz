const router = require('express').Router();
const ThemePage = require('../../components/ThemesPage');
const { Theme, } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    if (themes) {
      res.status(200).send(res.renderComponent(ThemePage, { themes, title: 'Самый лучший квиз!' }));
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
