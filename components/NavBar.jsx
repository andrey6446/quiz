const React = require("react");

function NavBar({ user }) {
  return (
    <>
      <div className="navBar">
        <img src="/image/logo.svg" alt="logo" className="logo" />
        {user ? <p>Привет, {user}!</p> : <></>}
      </div>
      <hr />
    </>
  );
}

module.exports = NavBar;
