const React = require("react");
const Layout = require("./Layout");

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <form action="/auth/registration" method="post">
        <input type="text" placeholder="имя" name="userName" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="пароль" name="password" />
        <button>Добавить</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
