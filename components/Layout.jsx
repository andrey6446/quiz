const React = require("react");
const NavBar = require("./NavBar");

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
