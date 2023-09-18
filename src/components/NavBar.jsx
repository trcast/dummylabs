import React from "react";
import logo from "../assets/client/dummylabs-logo.svg";
import twitter from "../assets/client/twitter.svg";
import discord from "../assets/client/discord.svg";

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Dummy Labs Logo" className="nav-logo" />
      <div className="nav-links">
        <p className="nav-links-text">showroom</p>
        <p className="nav-links-text">services</p>
        <p className="nav-links-text">clients</p>
        <p className="nav-links-text">team</p>
        <p className="nav-links-text">contact</p>
      </div>
      <div className="nav-socials">
        <img src={twitter} alt="Twitter Logo" className="nav-social-icon" />
        <img src={discord} alt="Discord Logo" className="nav-social-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
