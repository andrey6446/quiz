const router = require("express").Router();

const RegistrationPage = require("../../components/RegistrationPage");

router.get("/registration", (req, res) => {
  try {
    res.send(res.renderComponent(RegistrationPage, { title: "Регистрация" }));
  } catch ({ message }) {
    res.status(500).json("Ошибочка");
  }
});

module.exports = router;
