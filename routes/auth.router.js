const router = require("express").Router();

const RegistrationPage = require("../components/RegistrationPage");
const { User } = require("../db/models");

router.get("/registration", (req, res) => {
  try {
    res.send(
      res.renderComponent(RegistrationPage, { title: "Зарегистрироваться" })
    );
  } catch ({ message }) {
    res.status(500).json("Ошибочка");
  }
});

router.post("/registration", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (userName !== "" && email !== "" && password !== "") {
      res.app.locals.user = userName;
      res.status(201).redirect("/");
    } else {
    }
  } catch ({ message }) {
    res.status(500).json("Ошибка");
  }
});

module.exports = router;
