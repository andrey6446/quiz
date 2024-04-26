const router = require('express').Router();
const PageNotFound = require('../../components/PageNotFound');

router.get('*', (req, res) => {
  try {
    res.status(200).send(res.renderComponent(PageNotFound, { title: 'Что-то не так' }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
