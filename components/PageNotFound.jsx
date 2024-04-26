const React = require('react');
const Layout = require('./Layout');

function PageNotFound({ title }) {
  return (
    <Layout title={title}>
      <div className="not">
        <h1>PageNotFound</h1>
        <p>404</p>
      </div>
      <img src="/image/gypno.gif" alt="404" className="notGif" />
    </Layout>
  );
}

module.exports = PageNotFound;
