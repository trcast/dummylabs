import React from "react";
import "../App.css";
import Twitter from "../assets/client/twitter.svg";
import Discord from "../assets/client/discord.svg";
import Instagram from "../assets/client/instagram.svg";

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
          href="https://discord.gg/TUpEbX9tzq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-socials" src={Discord} alt="" />
        </a>
        <a
          href="https://instagram.com/dummylabs.co?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-socials" src={Instagram} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
