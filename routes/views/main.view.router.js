const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  try {
    res.status(200).send(res.renderComponent(MainPage, { title: 'Самый лучший квиз!' }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
