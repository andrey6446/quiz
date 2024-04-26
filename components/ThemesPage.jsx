const React = require('react');
const Layout = require('./Layout');
const ThemeCard = require('./ThemeCard');

function ThemesPage({ title, themes }) {
  return (
    <Layout title={title}>
      <div className="themeStart">
        <p>Выберите тему</p>
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
