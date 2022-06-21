import React from "react";
import { useGlobalContext } from "./context";
import {Link} from 'react-router-dom'
import { navBar } from "./data";

const Navbar = () => {
  const { showHideSidebar } = useGlobalContext();
  return (
    <div>
      <div className="home-top">
         {/* Logo takes you back home */}
        <a href='/'><img className="logo1" src="../Frame 37.svg" alt="logo" /></a>
        <nav className="navbar">
          <a href="/"><img className="logo" src="../Frame 37.svg" alt="logo" /></a>
          {navBar.map((nav) => {
            const { id, name, link } = nav;
            return (
              <header key={id} className="nav-item">
                <a href={link}>{name}</a>
              </header>
            );
          })}
          <button className="nav-btn nav-btn1"><a href="/logIn">Log In</a></button><button className="nav-btn nav-btn2"><a href="/createAccount">Create Account</a></button>
        </nav>
        <img
          src="../fabars.png"
          alt="logo2"
          onClick={showHideSidebar}
          className="fabars"
        />
      </div>
      <div className="thin-line"></div>
    </div>
  );
};

export default Navbar;
