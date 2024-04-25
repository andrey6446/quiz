const React = require('react');

function ThemeCard({ theme }) {
  return (
    <div className="themeCard">
      <img src={theme.image} alt="Theme img" />
      <p>{theme.name}</p>
      <button><a href={`/themes/${theme.id}/questions/1`}>Начать</a></button>
    </div>
  );
}

module.exports = ThemeCard;
