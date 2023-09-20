import React from "react";
import "../App.css";
import Twitter from "../assets/client/twitter.svg";
import Discord from "../assets/client/discord.svg";

const Footer = () => {
  return (
    <footer>
      <p className="footer-copy">© DUMMY LABS 2023</p>
      <div className="footer-socials-container">
        <a
          href="https://x.com/Dummy_Labs?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-socials" src={Twitter} alt="" />
        </a>
        <a
          href="https://discord.gg/2ceeRARH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-socials" src={Discord} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
