import React from "react";
import "../App.css";
import Twitter from "../assets/client/twitter.svg";
import Discord from "../assets/client/discord.svg";

const Footer = () => {
  return (
    <footer>
      <p className="footer-copy">© DUMMY LABS 2023</p>
      <div className="footer-socials-container">
        <img className="footer-socials" src={Twitter} alt="" />
        <img className="footer-socials" src={Discord} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
