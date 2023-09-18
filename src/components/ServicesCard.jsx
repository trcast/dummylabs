import React from "react";

const ServicesCard = ({ icon, header, descript }) => {
  return (
    <div className="service-container">
      <img src={icon} alt="" />
      <div className="service-text">
        <h2 className="service-header">{header}</h2>
        <p className="service-descript">{descript}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
