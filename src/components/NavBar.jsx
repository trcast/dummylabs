import React from "react";
import { useState } from "react";
import logo from "../assets/client/dummylabs-logo.svg";
import twitter from "../assets/client/twitter.svg";
import discord from "../assets/client/discord.svg";
import navtop from "../assets/client/mobile-menu-top.svg";
import navbottom from "../assets/client/mobile-menu-bottom.svg";
import menubars from "../assets/client/mobile-menu-bars.svg";
import menuclose from "../assets/client/mobile-menu-close.svg";

const NavBar = ({ refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const sectionTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 324, behavior: "smooth" });
    }
  };

  const scrollToSectionMobile = (ref) => {
    if (ref.current) {
      const sectionTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 824, behavior: "smooth" });
    }
    setMenuOpen((prevState) => !prevState);
  };

  const scrollToSectionMobileLogo = (ref) => {
    if (ref.current) {
      const sectionTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 824, behavior: "smooth" });
    }
  };

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  const navContentClass = menuOpen
    ? "nav-content-mobile.open"
    : "nav-content-mobile";

  return (
    <>
      <nav className="nav-desktop">
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
      {/* MOBILE ---------------------------------- */}
      <nav className="nav-mobile">
        <div className="nav-header-mobile">
          <img
            className="nav-logo-mobile"
            src={logo}
            alt=""
            onClick={() => scrollToSectionMobileLogo(refs.headerRef)}
          />
          <img
            className="nav-toggle-mobile"
            src={menuOpen ? menuclose : menubars}
            onClick={toggleMenu}
          />
        </div>
        {menuOpen && (
          <div className="nav-content-mobile">
            <img className="nav-line-mobile" src={navtop} alt="" />
            <div className="nav-links-mobile">
              <p
                className="nav-links-text-mobile"
                onClick={() => scrollToSectionMobile(refs.showroomRef)}
              >
                showroom
              </p>
              <p
                className="nav-links-text-mobile"
                onClick={() => scrollToSectionMobile(refs.servicesRef)}
              >
                services
              </p>
              <p
                className="nav-links-text-mobile"
                onClick={() => scrollToSectionMobile(refs.clientsRef)}
              >
                clients
              </p>
              <p
                className="nav-links-text-mobile"
                onClick={() => scrollToSectionMobile(refs.teamRef)}
              >
                team
              </p>
              <p
                className="nav-links-text-mobile"
                onClick={() => scrollToSectionMobile(refs.contactRef)}
              >
                contact
              </p>
              <a
                href="https://x.com/Dummy_Labs?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="nav-links-text-mobile">twitter</p>
              </a>
              <a
                href="https://discord.gg/kZmcmaMJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="nav-links-text-mobile">discord</p>
              </a>
            </div>
            <img className="nav-line-mobile" src={navbottom} alt="" />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
