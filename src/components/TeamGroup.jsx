import React from "react";
import TeamCard from "./TeamCard";
import Manchez from "../assets/pfps/Manchez.png";
import Clipse from "../assets/pfps/Clipse.jpeg";
import Danny from "../assets/pfps/Danny.png";
import Nick from "../assets/pfps/Nick.png";
import Ompo from "../assets/pfps/Ompo.png";
import Solmg from "../assets/pfps/SOLMG.jpeg";
import LineRight from "../assets/client/team-line-right.svg";
import LineLeft from "../assets/client/team-line-left.svg";

const TeamGroup = () => {
  return (
    <div className="team-group-main">
      {/* CORE TEAM ---------------------------- */}
      <div className="team-group-section">
        <div className="team-group-title">
          <img src={LineLeft} alt="" />
          <h1>Core Team</h1>
          <img src={LineRight} alt="" />
        </div>
        <div className="team-card-group-container">
          <TeamCard pfp={Manchez} title="Creative Director" name="Manchez" />
          <TeamCard pfp={Danny} title="Managing Director" name="Danny" />
          <TeamCard pfp={Nick} title="Marketing Director" name="Nick" />
        </div>
      </div>
      {/* DESIGNERS ---------------------------- */}
      <div className="team-group-section">
        <div className="team-group-title">
          <img src={LineLeft} alt="" />
          <h1>DESIGNERS</h1>
          <img src={LineRight} alt="" />
        </div>
        <div className="team-card-group-container">
          <TeamCard pfp={Ompo} title="3D Artist" name="Ompo" />
          <TeamCard pfp={Solmg} title="3D Artist & Art Director" name="Solmg" />
          <TeamCard pfp={Clipse} title="3D Animator" name="Clipse" />
        </div>
      </div>
    </div>
  );
};

export default TeamGroup;
