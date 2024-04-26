const React = require("react");
const Layout = require("./Layout");

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <form action="/auth/registration" method="post" className="regForm">
        <input
          autoComplete="off"
          type="text"
          placeholder="имя"
          name="userName"
        />
        <button>Начать играть</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
