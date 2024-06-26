const React = require("react");
const Layout = require("./Layout");
const ThemeCard = require("./ThemeCard");

function ThemesPage({ title, themes, user, score }) {

  return (
    <Layout title={title} user={user}>
      <div className="themeStart">
        <p>Выберите тему</p>
        <p>
          Твои баллы:
          {score}
        </p>
        <img src="/image/hat.svg" alt="Hat" />
      </div>
      <div className="themes">
        {themes.map((theme) => (
          <ThemeCard theme={theme} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
