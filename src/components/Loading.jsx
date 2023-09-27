import React from "react";
import "../App.css";
import BarLoader from "react-spinners/BarLoader";
import LogoFull from "../assets/client/dummylabs-logo-full.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading-logo-full" src={LogoFull} alt="Dummy Labs Logo" />
      <BarLoader
        color="#f6cd58"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
