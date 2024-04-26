const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      
      <a href="/themes">
        <button>Начать играть</button>
      </a>
    </Layout>
  );
}

module.exports = MainPage;
