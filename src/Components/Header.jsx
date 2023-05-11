import React from 'react';

function Header() {
  return (
    <header>
      <div className="header__logo">
      <img src={process.env.PUBLIC_URL + '/img/applogo.png'} alt="Weather App" />
      </div>
      <div className="header__title">
        <h1>Weather App</h1>
      </div>
    </header>
  );
}

export default Header;