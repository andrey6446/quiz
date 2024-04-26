const router = require("express").Router();

router.post("/registration", async (req, res) => {
  try {
    const { userName } = req.body;
    if (userName !== "") {
      res.app.locals.user = userName;
      res.status(201).redirect("/themes");
    } else {
      res.status(400).json("Поля не могут быть пустыми!");
    }
  } catch ({ message }) {
    res.status(500).json("Ошибка");
  }
});

module.exports = router;