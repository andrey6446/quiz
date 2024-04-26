const React = require("react");
const Layout = require("./Layout");

function QuestionPage({ title, themeId, name, quize, questionId, length }) {
  return (
    <Layout title={title}>
      <h1>{name}</h1>
      <img src={quize.image} alt="For quize" />
      <p>{quize.question}</p>
      <form
        action={`/api/themes/${themeId}/questions/${+questionId}/a`}
        method="POST"
        className="formAnswer"
      >
        <input type="text" name="answer" />
        <button type="submit">Ответить</button>
        {+questionId === length ? (
          <button>
            <a href="/themes/">Go home!!!!</a>
          </button>
        ) : (
          <button>
            <a href={`/themes/${themeId}/questions/${+questionId + 1}/a`}>
              Next
            </a>
          </button>
        )}
      </form>
    </Layout>
  );
}

module.exports = QuestionPage;
