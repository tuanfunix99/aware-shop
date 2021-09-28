import React from "react";
import "./Footer.styles.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* block footer top */}
      <div className="footer__top">
        <div className="logo">
          <h4>
            <Link to="/">Aware</Link>
          </h4>
        </div>
        <div className="navbar">
          <ul className="header__menu">
            <li className="header__item">
              <a href="/">Home</a>
            </li>
            <li className="header__item">
              <a href="/">Products</a>
            </li>
            <li className="header__item">
              <a href="/">Servies</a>
            </li>
            <li className="header__item">
              <a href="/">About Us</a>
            </li>
            <li className="header__item">
              <a href="/">Help</a>
            </li>
            <li className="header__item">
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <ul className="header__menu">
            <li className="header__item">
              <a href="/">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="header__item">
              <a href="/">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="header__item">
              <a href="/">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
      {/* block footer bottom */}
      <div className="footer__bottom">
        <div className="navbar">
          <ul className="header__menu">
            <li className="header__item">
              <a href="/">Home</a>
            </li>
            <li className="header__item">
              <a href="/">Products</a>
            </li>
            <li className="header__item">
              <a href="/">Servies</a>
            </li>
            <li className="header__item">
              <a href="/">About Us</a>
            </li>
            <li className="header__item">
              <a href="/">Help</a>
            </li>
            <li className="header__item">
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <ul className="header__menu">
            <li className="header__item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="header__item">
              <a href="/">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
