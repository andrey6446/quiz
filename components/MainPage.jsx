const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <div className="mainPage">
        <img src="/image/bg-main-1.svg" alt="" className="img-bg-1" />
        <div className="main-description">
          <h1>Поднатужились</h1>
          <h2>Андрей и Катя</h2>
          <button className="btn-start">
            <a href="/themes">
              <p>Начать игру</p>
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
