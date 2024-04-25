const React = require('react');
const Layout = require('./Layout');

function PageNotFound({ title }) {
  return (
    <Layout title={title}>
      <h1>PageNotFound</h1>
      <p>404</p>
    </Layout>
  );
}

module.exports = PageNotFound;