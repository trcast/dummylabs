import React from "react";
import logo from "../assets/client/dummylabs-logo.svg";
import twitter from "../assets/client/twitter.svg";
import discord from "../assets/client/discord.svg";

const NavBar = ({ refs }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      const sectionTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 324, behavior: "smooth" });
    }
  };

  return (
    <nav>
      <img
        src={logo}
        alt="Dummy Labs Logo"
        className="nav-logo"
        onClick={() => scrollToSection(refs.headerRef)}
      />
      <div className="nav-links">
        <p
          className="nav-links-text hover-underline-animation"
          onClick={() => scrollToSection(refs.showroomRef)}
        >
          showroom
        </p>
        <p
          className="nav-links-text hover-underline-animation"
          onClick={() => scrollToSection(refs.servicesRef)}
        >
          services
        </p>
        <p
          className="nav-links-text hover-underline-animation"
          onClick={() => scrollToSection(refs.clientsRef)}
        >
          clients
        </p>
        <p
          className="nav-links-text hover-underline-animation"
          onClick={() => scrollToSection(refs.teamRef)}
        >
          team
        </p>
        <p
          className="nav-links-text hover-underline-animation"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          contact
        </p>
      </div>
      <div className="nav-socials">
        <a
          href="https://x.com/Dummy_Labs?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter Logo" className="nav-social-icon" />
        </a>
        <a
          href="https://discord.gg/kZmcmaMJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} alt="Discord Logo" className="nav-social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
