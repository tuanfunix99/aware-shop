import React from "react";
import "./Header.styles.scss";
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";

const Header = () => {

  const { isLogin } = useSelector(state => state.user);

  return (
    <div className="header">
      {/* block header top */}
      <div className="header__top">
        <div className="header__search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search"
          />
          <i className="fas fa-search header__search-i" />
        </div>
        <div className="logo">
          <h4>
            <Link to="/">Aware</Link>
          </h4>
        </div>
        <div className="header__auth">
          <div className="header__register">
            <Link className="header__a" to="/register">
              Register
            </Link>
          </div>
          <div className="header__login">
            { !isLogin && <Link className="header__a" to="/login">
              login
            </Link>} 
            { isLogin && <a className="header__a" href="/api/auth/logout">
              logout
            </a>} 
          </div>
          <div className="header__cart">
            <i className="fas fa-shopping-cart" />
            <div className="header__amount">0</div>
          </div>
        </div>
      </div>
      {/* block header bottom */}
      <div className="header__bottom">
        <div className="header__navbar">
          <ul className="header__menu">
            <li className="header__item">
              <a href="/">Men</a>
            </li>
            <li className="header__item">
              <a href="/">Ladies</a>
            </li>
            <li className="header__item">
              <a href="/">Girls</a>
            </li>
            <li className="header__item">
              <a href="/">Boys</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
