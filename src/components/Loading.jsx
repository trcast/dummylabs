import React from "react";
import "../App.css";
import BarLoader from "react-spinners/BarLoader";
import LogoFull from "../assets/client/dummylabs-logo-full.svg";
import LogoSmall from "../assets/client/dummylabs-logo.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading-logo-full" src={LogoFull} alt="Dummy Labs Logo" />
      <BarLoader
        color="#f6cd58"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <img className="loading-logo-small" src={LogoSmall} alt="" />
      <h1 className="loading-title">DUMMY LABS</h1> */}
    </div>
  );
};

export default Loading;
