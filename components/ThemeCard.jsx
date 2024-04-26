const React = require("react");

function ThemeCard({ theme }) {
  return (
    <div className="themeCard">
      <div className="themeImg">
        <img src={theme.image} alt="Theme img" />
      </div>
      <p>{theme.name}</p>
      <button>
        <a href={`/themes/${theme.id}/questions/1/a`}>
          <p>Начать квиз</p>
        </a>
      </button>
    </div>
  );
}

module.exports = ThemeCard;
