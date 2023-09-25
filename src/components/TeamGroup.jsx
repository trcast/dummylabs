import React from "react";
import TeamCard from "./TeamCard";
import Manchez from "../assets/pfps/Manchez.png";
import Clipse from "../assets/pfps/Clipse.jpeg";
import Danny from "../assets/pfps/Danny.png";
import Nick from "../assets/pfps/Nick.png";
import Ompo from "../assets/pfps/Ompo.png";
import Solmg from "../assets/pfps/SOLMG.jpeg";
import Kaan from "../assets/pfps/kaan.jpeg";
import LineRight from "../assets/client/team-line-right.svg";
import LineLeft from "../assets/client/team-line-left.svg";
import LineShortRight from "../assets/client/line-short-bottom-right-alt.svg";
import LineShortLeft from "../assets/client/line-short-bottom-left-alt.svg";

const TeamGroup = React.forwardRef((props, ref) => {
  return (
    <div className="team-group-main" ref={ref}>
      {/* CORE TEAM ---------------------------- */}
      <div className="team-group-section">
        <div className="team-group-title">
          <img className="team-group-title-line" src={LineLeft} alt="" />
          <img
            className="team-group-title-line-mobile"
            src={LineShortLeft}
            alt=""
          />
          <h1>Core Team</h1>
          <img className="team-group-title-line" src={LineRight} alt="" />
          <img
            className="team-group-title-line-mobile"
            src={LineShortRight}
            alt=""
          />
        </div>
        <div className="team-card-group-container">
          <TeamCard
            pfp={Manchez}
            title="Creative Director"
            name="Manchez"
            link="https://twitter.com/Manchez_sol"
          />
          <TeamCard
            pfp={Danny}
            title="Managing Director"
            name="Danny"
            link="https://twitter.com/dannyph3ntom"
          />
          <TeamCard
            pfp={Nick}
            title="Marketing Director"
            name="Nick"
            link="https://twitter.com/ruggednick"
          />
        </div>
      </div>
      {/* DESIGNERS ---------------------------- */}
      <div className="team-group-section">
        <div className="team-group-title">
          <img
            className="team-group-title-line-mobile"
            src={LineShortLeft}
            alt=""
          />
          <img className="team-group-title-line" src={LineLeft} alt="" />
          <h1>DESIGNERS</h1>
          <img
            className="team-group-title-line-mobile"
            src={LineShortRight}
            alt=""
          />
          <img className="team-group-title-line" src={LineRight} alt="" />
        </div>
        <div className="team-card-group-container">
          <TeamCard
            pfp={Ompo}
            title="3D Artist"
            name="Ompo"
            link="https://twitter.com/Ompolompon"
          />
          <TeamCard
            pfp={Solmg}
            title="3D Artist & Art Director"
            name="Solmg"
            link="https://twitter.com/solmg_art"
          />
          <TeamCard
            pfp={Clipse}
            title="3D Animator"
            name="Clipse"
            link="https://twitter.com/OBClipse"
          />
          <TeamCard
            pfp={Kaan}
            title="3D Artist"
            name="Kaan Tapucu"
            link="https://twitter.com/KaanTapucuArt"
          />
        </div>
      </div>
    </div>
  );
});

export default TeamGroup;
