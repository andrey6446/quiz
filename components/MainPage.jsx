const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <button>
        <a href="/themes">
          <p>Начать игру</p>
        </a>
      </button>
    </Layout>
  );
}

module.exports = MainPage;
