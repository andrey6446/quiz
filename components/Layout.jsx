const React = require("react");

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
