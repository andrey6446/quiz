const React = require('react');

function NavBar({ user }) {
  return (
    <>
      <div className="navBar">
        <a href="/" className="aLogo">
          <img src="/image/logo.svg" alt="logo" className="logo" />
        </a>

        {user ? (
          <p>
            Привет,
            {user}!
          </p>
        ) : (
          <></>
        )}
      </div>
      <hr />
    </>
  );
}

module.exports = NavBar;
