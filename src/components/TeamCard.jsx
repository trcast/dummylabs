import React from "react";
import Twitter from "../assets/pfps/twitter.svg";
import Cardline from "../assets/pfps/card-line.svg";

const TeamCard = ({ pfp, name, title }) => {
  return (
    <div className="team-card-container">
      <img className="team-card-img" src={pfp} alt="" />
      <div className="team-card-info-container">
        <div className="team-card-text-container">
          <h3 className="team-card-title">{title}</h3>
          <h2 className="team-card-name">{name}</h2>
        </div>
        <img src={Twitter} alt="" />
      </div>
      <img className="team-card-line" src={Cardline} alt="" />
    </div>
  );
};

export default TeamCard;
