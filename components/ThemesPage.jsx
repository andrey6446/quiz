const React = require('react');
const Layout = require('./Layout');
const ThemeCard = require('./ThemeCard');

function ThemesPage({ title, themes }) {
  return (
    <Layout title={title}>
      <h1>Всем привяо на нашем квизе!!!111!!</h1>
      <p>Вас приветствует команда Андрей & Катя</p>
      <div className="themes">
        {themes.map((theme) => (
          <ThemeCard theme={theme} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
