const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ title, themeId, name, quize, questionId, length, score }) {
  return (
    <Layout title={title}>
      <h1 className="questionHeader">{name}</h1>
      <div className="question">
        <div className="questionImg">
          <img src={quize.image} alt="For quize" />
        </div>
        <p>{quize.question}</p>
        <div className="questionForm">
          <form
            action={`/api/themes/${themeId}/questions/${+questionId}/a`}
            method="POST"
            className="formAnswer"
          >
            <input type="text" name="answer" autoComplete="off" />
            <button type="submit">Ответить</button>
          </form>
          {+questionId === length ? (
            <button>
              <a href="/themes/">
                <p>Домой</p>
              </a>
            </button>
          ) : (
            <button>
              <a href={`/themes/${themeId}/questions/${+questionId + 1}/a`}>
                <p>Следующий</p>
              </a>
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionPage;
