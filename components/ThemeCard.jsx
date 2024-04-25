const React = require("react");

function ThemeCard({ theme }) {
  return (
    <div className="themeCard">
      <img src={theme.image} alt="Theme img" />
      <p>{theme.name}</p>
    </div>
  );
}

module.exports = ThemeCard;
