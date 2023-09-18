import React from "react";
import LineRight from "../assets/client/line-long-bottom-right.svg";
import DashedLines from "../assets/client/dashed-lines.svg";
import DotsBG from "../assets/client/dots-bg-title.svg";

const TitleText = (props) => {
  return (
    <div className="title-container-right">
      <img className="title-line" src={LineRight} alt="" />
      <div className="title-text-container">
        <h1 className="title-text">{props.title}</h1>
        <img className="title-dots" src={DotsBG} alt="" />
      </div>
      <img className="title-dash" src={DashedLines} alt="" />
    </div>
  );
};

export default TitleText;
