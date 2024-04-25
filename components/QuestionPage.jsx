const React = require("react");
const Layout = require("./Layout");

function QuestionPage({ title, theme, quize }) {
  return (
    <Layout title={title}>
      <h1>{theme.name}</h1>
      <img src={quize.image} alt="Image for quize" />
      <p>{quize.quesion}</p>
      <form action="#" method="POST" className="formAnswer">
        <input type="text" name="answer" />
        <button>Ответить</button>
      </form>
    </Layout>
  );
}

module.exports = QuestionPage;
