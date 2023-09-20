import React from "react";
import Link from "../assets/studio-clients/client-link.svg";

const StudioClientsCard = ({ logo, name, link }) => {
  return (
    <a href={link} target="blank">
      <div className="studio-client-card">
        <img className="studio-client-logo" src={logo} alt="" />
        <div className="studio-client-info">
          <img className="studio-client-link" src={Link} alt="" />
          <h3 className="studio-client-name">{name}</h3>
        </div>
      </div>
    </a>
  );
};

export default StudioClientsCard;
