const React = require('react');
const Layout = require('./Layout');

function QuestionPage({
  title, themeId, name, quize, questionId, length,
}) {
  return (
    <Layout title={title}>
      <h1>{name}</h1>
      <img src={quize.image} alt="Image for quize" />
      <p>{quize.question}</p>
      <form action="#" method="POST" className="formAnswer">
        <input type="text" name="answer" />
        <button>Ответить</button>
        { +questionId === length
          ? <button><a href={`/themes/`}>Go home!!!!</a></button>
          : <button><a href={`/themes/${themeId}/questions/${+questionId + 1}`}>Next</a></button>
        }
      </form>
    </Layout>
  );
}

module.exports = QuestionPage;
