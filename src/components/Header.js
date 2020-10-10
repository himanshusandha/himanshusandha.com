import React, { useState, useEffect } from "react";
import "../styles/components/Header.css";
import logo from "../resources/logo.png";
import dark from "../resources/dark.png";
import light from "../resources/light.png";

function Header() {
  const [isDark, setIsDark] = useState(false);

  const toogleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else if (!isDark) {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navbarBody = (
    <>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <button onClick={toogleTheme} className="header_toogle_mode">
        {!isDark && <img src={light} alt="lightMode" />}
        {isDark && <img src={dark} alt="darkMode" />}
      </button>
    </>
  );

  const openNav = () => {
    document.getElementsByClassName("header_navbar_mobile")[0].style.width =
      "100%";
  };

  const closeNav = () => {
    document.getElementsByClassName("header_navbar_mobile")[0].style.width =
      "0%";
  };

  return (
    <React.Fragment>
      <div className="header_base">
        <a href="/">
          <img src={logo} alt="@himanshuSandha" className="header_img_logo" />
        </a>
        <div className="header_navbar_desktop">{navbarBody}</div>
        <div className="header_navbar_mobile_open" onClick={openNav}>
          &#9776;
        </div>
        <div className="header_navbar_mobile">
          <div className="header_navbar_mobile_closebtn" onClick={closeNav}>
            &times;
          </div>
          {navbarBody}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
